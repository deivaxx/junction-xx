
export class StreamIdentifier {
  constructor(
    private domain: string,
    private path: string,
  ) {
  }

  public toString(): string {
    return `${this.domain}/${this.path}`;
  }

  public equals(other: StreamIdentifier): boolean {
    return other.domain === this.domain  && other.path === this.path;
  }
}
