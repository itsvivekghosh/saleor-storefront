import { getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways } from "../../types";

declare const Razorpay: any;

export class RazorpayGateway {
  constructor(
    private paymentToken: string,
    private gatewayDetails: getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways,
    private transactionDetails: {
      amount: number;
      currency: string;
    }
  ) {}

  makePayment(): Promise<{ [key: string]: any } | void> {
    return new Promise((resolve, reject) => {
      const apiKey = this.gatewayDetails.config.find(
        ({ field }) => field === "api_key"
      ).value;

      const { amount, currency } = this.transactionDetails;

      const options = {
        amount: currency === "INR" ? amount * 100 : amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        handler: (response: { [key: string]: any }) => {
          // tslint:disable-next-line:no-console
          console.log('response');
          if ("error" in response) {
            reject(response);
          } else {
            resolve(response);
          }
        },
        key: apiKey,
        name: "Go4Life",
        notes: {},
        order_id: this.paymentToken,
        // prefill: {
        //   contact: this.userDetails.phone,
        //   email: this.userDetails.email,
        //   name: `${this.userDetails.firstName} ${this.userDetails.lastName}`.trim(),
        // },
        theme: {
          color: "#286E48",
        },
      };

      const razorPayInstance = new Razorpay(options);
      razorPayInstance.open();

      // Watch for razorpay dialog getting closed
      const startTime = new Date();
      const getTimeElapsedInSeconds = () =>
        (new Date().getTime() - startTime.getTime()) / 1000;

      const intervalId = setInterval(() => {
        const el: HTMLElement = document.querySelector(".razorpay-container");
        const isVisible = el && el.offsetHeight > 50;

        if (!isVisible && getTimeElapsedInSeconds() >= 1) {
          clearInterval(intervalId);
          reject();
        }
      }, 50);
    });
  }
}
