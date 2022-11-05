import { Address } from "./Address";

export class User {
  constructor(
    public readonly address: Address,
  ) {
  }

  public get privateKey(): string {
    return this.address.privateKey;
  }
}
