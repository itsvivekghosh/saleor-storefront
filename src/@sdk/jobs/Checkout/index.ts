import { CheckoutNetworkManager } from "@sdk/network";
import { ApolloErrorWithUserInput } from "@sdk/react/types";
import { LocalRepository } from "@sdk/repository";

import { JobQueue } from "../JobQueue";
import { LocalStorageJobs } from "../types";

export class CheckoutJobQueue extends JobQueue {
  private checkoutNetworkManager: CheckoutNetworkManager;
  private onErrorListener:
    | ((error: ApolloErrorWithUserInput | any) => any)
    | undefined;

  constructor(
    repository: LocalRepository,
    checkoutNetworkManager: CheckoutNetworkManager,
    onErrorListener: (error: ApolloErrorWithUserInput | any) => any
  ) {
    super(repository);
    this.checkoutNetworkManager = checkoutNetworkManager;
    this.onErrorListener = onErrorListener;

    const queuePossibilities = new Map([
      ["setShippingAddress", this.enqueueSetShippingAddress],
    ]);
    this.enqueueAllSavedInRepository(queuePossibilities, "checkout");
  }

  enqueueSetShippingAddress = () => {
    this.addToQueue(
      LocalStorageJobs.CHECKOUT_SET_SHIPPING_ADDRESS,
      () => this.setShippingAddress(),
      () => {
        this.updateJobsStateInRepository(
          {
            setShippingAddress: true,
          },
          "checkout"
        );
      },
      () => {
        this.updateJobsStateInRepository(
          {
            setShippingAddress: false,
          },
          "checkout"
        );
      }
    );
  };

  private setShippingAddress = async () => {
    const checkout = this.repository.getCheckout();

    if (checkout) {
      const {
        data,
        errors,
      } = await this.checkoutNetworkManager.setShippingAddress(checkout);
      if (errors && this.onErrorListener) {
        this.onErrorListener(errors);
      } else if (data) {
        this.repository.setCheckout({
          ...checkout,
          shippingAddress: data.shippingAddress,
        });
      }
    }
  };
}