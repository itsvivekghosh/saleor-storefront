/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenAuthUserComponent
// ====================================================

export interface TokenAuthUserComponent_tokenCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface TokenAuthUserComponent_tokenCreate_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface TokenAuthUserComponent_tokenCreate_user_defaultShippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: TokenAuthUserComponent_tokenCreate_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface TokenAuthUserComponent_tokenCreate_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface TokenAuthUserComponent_tokenCreate_user_defaultBillingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: TokenAuthUserComponent_tokenCreate_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
}

export interface TokenAuthUserComponent_tokenCreate_user_addresses_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface TokenAuthUserComponent_tokenCreate_user_addresses {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: TokenAuthUserComponent_tokenCreate_user_addresses_country;
  countryArea: string;
  phone: string | null;
}

export interface TokenAuthUserComponent_tokenCreate_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: TokenAuthUserComponent_tokenCreate_user_defaultShippingAddress | null;
  defaultBillingAddress: TokenAuthUserComponent_tokenCreate_user_defaultBillingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (TokenAuthUserComponent_tokenCreate_user_addresses | null)[] | null;
}

export interface TokenAuthUserComponent_tokenCreate {
  __typename: "CreateToken";
  token: string | null;
  errors: (TokenAuthUserComponent_tokenCreate_errors | null)[];
  user: TokenAuthUserComponent_tokenCreate_user | null;
}

export interface TokenAuthUserComponent {
  /**
   * Mutation that authenticates a user and returns token and user data.
   * 
   * It overrides the default graphql_jwt.ObtainJSONWebToken to wrap potential
   * authentication errors in our Error type, which is consistent to how the rest of
   * the mutation works.
   */
  tokenCreate: TokenAuthUserComponent_tokenCreate | null;
}

export interface TokenAuthUserComponentVariables {
  email: string;
  password: string;
}
