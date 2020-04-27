import "./scss/index.scss";

import * as H from "history";
import * as React from "react";

import { Loader } from "@components/atoms";

import { TypedGetUserWalletsQuery } from "./queries";
import { getUserWallets_wallets_edges_node } from "./types/getUserWallets";
import { WalletSummary } from "./WalletSummary";

interface IProps {
  user: any;
  history: H.History;
}

interface IState {
  wallets: getUserWallets_wallets_edges_node[];
}

export class WalletList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      wallets: [],
    };
  }

  render() {
    return (
      <TypedGetUserWalletsQuery
        onCompleted={data => {
          this.setState({ wallets: data.wallets.edges.map(e => e.node) });
        }}
      >
        {({ loading }) => {
          return loading ? (
            <Loader />
          ) : (
            <div>
              {this.state.wallets.map(wallet => (
                <WalletSummary wallet={wallet} history={this.props.history}></WalletSummary>
              ))}
            </div>
          );
        }}
      </TypedGetUserWalletsQuery>
    );
  }
}
