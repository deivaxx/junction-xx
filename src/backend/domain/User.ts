import { Address } from "./Address";

export class User {
  constructor(
    private readonly address: Address,
  ) {
  }

  public get privateKey(): string {
    return this.address.privateKey;
  }
}
