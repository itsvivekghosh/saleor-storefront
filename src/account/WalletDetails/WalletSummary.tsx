import * as H from "history";
import * as React from "react";

import { Money } from "@components/containers";

import { TransactionHistory } from "./TransactionHistory";
import { getUserWallets_wallets_edges_node } from "./types/getUserWallets";

interface IProps {
  wallet: getUserWallets_wallets_edges_node;
  history: H.History;
}

interface IState {
  foo: string;
}

export class WalletSummary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      foo: "bar",
    };
  }

  render() {
    return (
      <div>
        <h4>
          Balance: <Money money={this.props.wallet.currentBalance} />
        </h4>
        <p>
          <strong>Available Credit Limit: </strong>
          <Money money={this.props.wallet.creditLimit} />
        </p>
        <TransactionHistory
          wallet={this.props.wallet}
          history={this.props.history}
        ></TransactionHistory>
      </div>
    );
  }
}
