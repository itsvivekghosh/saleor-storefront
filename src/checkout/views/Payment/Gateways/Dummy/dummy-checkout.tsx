import { PROVIDERS } from "../../../../../core/config";
import { CardData } from "../../../../types/CardData";
import {
  Checkout,
  Checkout_availablePaymentGateways,
  Checkout_availablePaymentGateways_config,
} from "../../../../types/Checkout";
import { PayUPaymentSuccessResponse } from "./types/dummy";

declare const Razorpay: any;

const createRazorpay = (
  orderId: string,
  checkout: Checkout,
  paymentGatewayConfig: Checkout_availablePaymentGateways_config[]
): Promise<PayUPaymentSuccessResponse> => {
  return new Promise((resolve, reject) => {
    const apiKey = paymentGatewayConfig.find(({ field }) => field === "api_key")
      .value;
    const { amount, currency } = checkout.totalPrice.net;

    const options = {
      amount: currency === "INR" ? amount * 100 : amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      handler: (successResponse, errorResponse) => {
        if (successResponse) {
          resolve(successResponse);
        } else {
          reject(errorResponse);
        }
      },
      key: apiKey,
      name: "Go4Life",
      notes: {},
      order_id: orderId,
      prefill: {
        contact: checkout.shippingAddress.phone,
        email: checkout.email,
        name: `${checkout.billingAddress.firstName} ${checkout.billingAddress.lastName}`.trim(),
      },
      theme: {
        color: "#286E48",
      },
    };

    const razorPayInstance = new Razorpay(options);
    razorPayInstance.open();
  });
};

export const openRazorpayForm = async (
  checkout: Checkout,
  cardData: CardData
) => {
  const { availablePaymentGateways } = checkout;
  const razorpayProvider = availablePaymentGateways.find(
    provider => provider.name === PROVIDERS.RAZORPAY.label
  ) as Checkout_availablePaymentGateways;
  const razorpayOrderId = cardData.token;

  await createRazorpay(razorpayOrderId, checkout, razorpayProvider.config);
};