import React from "react";

import { PROVIDERS } from "../../../../core/config";
import { ProviderProps } from "../View";

class Wallet extends React.PureComponent<
  ProviderProps,
  { selectedStatus: { token: string; label: string } }
> {
  statuses = [
    { token: "charged", label: "Charged" },
    { token: "fully-refunded", label: "Fully refunded" },
    { token: "not-charged", label: "Not charged" },
  ];
  state = { selectedStatus: this.statuses[0] };

  render() {
    const {
      formRef,
      processPayment,
      checkout: {
        update,
        checkout: { token },
      },
    } = this.props;
    const { selectedStatus } = this.state;

    return (
      <form
        ref={formRef}
        onSubmit={async evt => {
          evt.preventDefault();

          await update({
            cardData: {
              ccType: "Wallet",
              lastDigits: "Wallet",
              token,
            },
          });
          processPayment(selectedStatus.token, PROVIDERS.WALLET);
        }}
        className="c-option__content"
      ></form>
    );
  }
}

export default Wallet;
