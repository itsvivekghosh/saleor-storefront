import * as React from "react";
import { generatePath, Redirect } from "react-router";

import { Button, Loader, Radio } from "@components/atoms";
import { Money } from "@components/containers";

import { walletHistoryUrl } from "../../../app/routes";
import { PROVIDERS } from "../../../core/config";
import {
  TypedGetWalletRechargeAvailablePaymentGateways,
  TypedWalletRechargeByIdQuery,
  TypedWalletRechargeCompleteMutation,
  TypedWalletRechargePaymentCreateMutation,
} from "../queries";
import { getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways } from "../types";
import { RazorpayGateway } from "./Gateways/Razorpay";
import * as S from "./styles";
import { SuggestedAmountButton } from "./SuggestedAmountButton";
import { IProps, IState } from "./types";

export class AddMoneyToWallet extends React.Component<IProps, IState> {
  private suggestedAmounts = [200, 500, 1000];

  constructor(props: IProps) {
    super(props);

    this.state = {
      availableGateways: [],
      formSubmitted: false,
      paymentInProgress: false,
      paymentIsSuccessful: false,
      rechargeAmount: 0,
      selectedGateway: undefined,
      wallet: undefined,
      walletRechargeId: props.match.params.walletRechargeId,
    };
  }

  increaseRechargetAmount(change: number): void {
    this.setState({ rechargeAmount: this.state.rechargeAmount + change });
  }

  onRechargeAmountInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = parseFloat(event.target.value);

    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    }

    this.setState({ rechargeAmount: newValue });
  }

  setSelectedGateway(providerName: string): void {
    this.setState({ selectedGateway: providerName });
  }

  setAvailableGetways(
    availableGateways: getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways[]
  ) {
    this.setState({ availableGateways });

    if (availableGateways.length === 1) {
      this.setState({
        selectedGateway: availableGateways[0].name,
      });
    }
  }

  setWalletRechargeDetails(paymentToken: string, walletRechargeId: string) {
    this.setState({ paymentToken, walletRechargeId });
  }

  whenWalletRechargeCreatedInBackend(): Promise<boolean> {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (
          this.state.formSubmitted &&
          this.state.paymentToken &&
          this.state.walletRechargeId
        ) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, 50);
    });
  }

  createPaymenetGateway() {
    return new RazorpayGateway(
      this.state.paymentToken,
      this.state.availableGateways.find(
        gateway => gateway.name === this.state.selectedGateway
      ),
      {
        amount: this.state.rechargeAmount,
        currency: this.state.wallet.currency,
      }
    );
  }

  async processPayment(
    createWalletPayment: () => Promise<any>,
    completeWalletRecharge: () => Promise<any>
  ) {
    if (this.state.paymentInProgress) {
      return;
    }

    this.setState({ paymentInProgress: true });

    try {
      await createWalletPayment();
      await this.whenWalletRechargeCreatedInBackend();
      const gateway = this.createPaymenetGateway();
      await gateway.makePayment();
      await completeWalletRecharge();
    } catch (e) {
      // handle the error
    } finally {
      this.setState({ paymentInProgress: false });
    }
  }

  render() {
    return this.state.paymentIsSuccessful ? (
      <Redirect to={generatePath(walletHistoryUrl)} />
    ) : (
      <div className="container">
        <TypedWalletRechargeByIdQuery
          variables={{ id: this.state.walletRechargeId }}
          onCompleted={data =>
            this.setState({ wallet: data.walletRecharge.wallet })
          }
        >
          {({ loading: loadingWallet }) => {
            return (
              <TypedGetWalletRechargeAvailablePaymentGateways
                onCompleted={data =>
                  this.setAvailableGetways(
                    data.walletRechargeAvailablePaymentGateways
                  )
                }
              >
                {({ loading: loadingGatways }) => {
                  const isLoading =
                    loadingGatways || loadingWallet || !this.state.wallet;

                  return isLoading ? (
                    <Loader />
                  ) : (
                    <div>
                      <h3>
                        Available Balance:{" "}
                        <Money money={this.state.wallet.currentBalance}></Money>
                      </h3>
                      <S.AmountWrapperDiv>
                        <S.SuggestedAmountsWrapper>
                          {this.suggestedAmounts.map(incrementValue => (
                            <SuggestedAmountButton
                              key={incrementValue}
                              amount={incrementValue}
                              currency={this.state.wallet.currency}
                              handleClick={() =>
                                this.increaseRechargetAmount(incrementValue)
                              }
                            ></SuggestedAmountButton>
                          ))}
                        </S.SuggestedAmountsWrapper>
                        <S.AmountInput>
                          <input
                            type="number"
                            min="0"
                            step="1"
                            value={this.state.rechargeAmount}
                            onChange={e => this.onRechargeAmountInputChange(e)}
                          />
                        </S.AmountInput>
                      </S.AmountWrapperDiv>
                      {this.state.availableGateways.map(provider => {
                        const providerName = provider.name;
                        const optionProps = {
                          key: providerName,
                          onSelect: () => this.setSelectedGateway(providerName),
                          selected: this.state.selectedGateway === providerName,
                          value: providerName,
                        };
                        // const paymentGatewayProps = {
                        //   // ...providerProps,
                        //   paymentGatewayConfig: provider.config,
                        // };
                        switch (providerName) {
                          case PROVIDERS.RAZORPAY.label:
                            return (
                              <S.Tile checked={optionProps.selected}>
                                <Radio
                                  data-cy="checkoutPaymentGatewayRazorpayInput"
                                  name="payment-method"
                                  value="Razorpay"
                                  checked={optionProps.selected}
                                  onChange={optionProps.onSelect}
                                  customLabel={true}
                                >
                                  <span data-cy="checkoutPaymentGatewayRazorpayName">
                                    Razorpay Payment Gateway
                                  </span>
                                </Radio>
                              </S.Tile>
                            );
                        }
                      })}
                      {/* <S.ClickToPay>Click to pay</S.ClickToPay> */}

                      <TypedWalletRechargePaymentCreateMutation
                        variables={{
                          input: {
                            amount: this.state.rechargeAmount,
                            gateway: this.state.selectedGateway,
                          },
                          walletRechargeId: this.state.walletRechargeId,
                        }}
                        onCompleted={data =>
                          this.setWalletRechargeDetails(
                            data.walletRechargePaymentCreate.walletRecharge
                              .payment.token,
                            data.walletRechargePaymentCreate.walletRecharge.id
                          )
                        }
                      >
                        {(
                          createWalletPayment,
                          { loading: paymentCreationPending }
                        ) => {
                          return (
                            <TypedWalletRechargeCompleteMutation
                              variables={{
                                walletRechargeId: this.state.walletRechargeId,
                              }}
                              onCompleted={() =>
                                this.setState({ paymentIsSuccessful: true })
                              }
                            >
                              {(
                                completeWalletRecharge,
                                { loading: walletRechargeCompletionPending }
                              ) => {
                                const inProgress =
                                  this.state.paymentInProgress ||
                                  paymentCreationPending ||
                                  walletRechargeCompletionPending;
                                return (
                                  <Button
                                    type="submit"
                                    disabled={inProgress}
                                    onClick={() => {
                                      this.setState({ formSubmitted: true });
                                      this.processPayment(
                                        createWalletPayment,
                                        completeWalletRecharge
                                      );
                                    }}
                                  >
                                    Click to Pay
                                  </Button>
                                );
                              }}
                            </TypedWalletRechargeCompleteMutation>
                          );
                        }}
                      </TypedWalletRechargePaymentCreateMutation>
                    </div>
                  );
                }}
              </TypedGetWalletRechargeAvailablePaymentGateways>
            );
          }}
        </TypedWalletRechargeByIdQuery>
      </div>
    );
  }
}
