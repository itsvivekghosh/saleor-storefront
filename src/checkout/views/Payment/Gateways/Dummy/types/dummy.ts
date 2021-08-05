export const PAYU_CARD_TYPE = "PayU_gateway";
export interface PayUPaymentSuccessResponse {
  payu_payment_id: string;
  payu_order_id: string;
}