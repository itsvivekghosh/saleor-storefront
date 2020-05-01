/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWalletRechargeAvailablePaymentGateways
// ====================================================

export interface getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  /**
   * Gateway config key.
   */
  field: string;
  /**
   * Gateway config value for key.
   */
  value: string | null;
}

export interface getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways {
  __typename: "PaymentGateway";
  /**
   * Payment gateway name.
   */
  name: string;
  /**
   * Payment gateway client configuration.
   */
  config: getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways_config[];
}

export interface getWalletRechargeAvailablePaymentGateways {
  /**
   * List of available payment gateways.
   */
  walletRechargeAvailablePaymentGateways: (getWalletRechargeAvailablePaymentGateways_walletRechargeAvailablePaymentGateways | null)[];
}
