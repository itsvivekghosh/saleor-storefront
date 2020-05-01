import { RouteComponentProps } from "react-router";

import {
  getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways,
  WalletDetail,
} from "../types";

export type IProps = RouteComponentProps<{ walletRechargeId: string }>;

export interface IState {
  availableGateways: getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways[];
  wallet: WalletDetail;
  rechargeAmount: number;
  selectedGateway?: string;
  formSubmitted: boolean;
  paymentToken?: string;
  walletRechargeId?:string;
  paymentInProgress: boolean;
  paymentIsSuccessful: boolean;
}
