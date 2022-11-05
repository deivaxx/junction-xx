import { StreamIdentifier } from "./StreamIdentifier";

export class Stream {
  constructor(
    public readonly id: StreamIdentifier,
  ) {}

  public equals(other: Stream): boolean {
    return this.id.equals(other.id);
  }
}