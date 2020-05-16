import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 30;
export const SUPPORT_EMAIL = "life@go4life.in";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  RAZORPAY: {
    href: "https://checkout.razorpay.com/v1/checkout.js",
    label: "Razorpay",
  },
  STRIPE: {
    href: "https://js.stripe.com/v3/",
    label: "Stripe",
  },
  WALLET: {
    label: "Wallet",
  },
};
export const STATIC_PAGES = [
  {
    label: "Privacy Policy",
    url: generatePageUrl("privacy-policy"),
  },
  {
    label: "Terms and Conditions",
    url: generatePageUrl("terms-and-conditions"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=919811189189",
    path: require("../images/whatsapp-icon.svg"),
  },
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/Go4LifeNow",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/go4lifenow/",
    path: require("../images/instagram-icon.svg"),
  },
  // {
  //   ariaLabel: "twitter",
  //   href: "https://twitter.com/getsaleor",
  //   path: require("../images/twitter-icon.svg"),
  // },
  // {
  //   ariaLabel: "youtube",
  //   href: "https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g/videos",
  //   path: require("../images/youtube-icon.svg"),
  // },
];
export const META_DEFAULTS = {
  custom: [],
  description: "Online store by Go4Life",
  image: `${window.location.origin}${require("../images/logo.png")}`,
  title: "Go4Life",

  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Address",
    nextActionName: "Continue to Shipping",
    nextStepLink: "/checkout/shipping",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Shipping",
    nextActionName: "Continue to Payment",
    nextStepLink: "/checkout/payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    nextStepLink: "/checkout/review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    nextStepLink: "/order-finalized",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
];
