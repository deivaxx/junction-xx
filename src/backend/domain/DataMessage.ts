import { Stream } from "./Stream";

export class DataMessage {
  constructor(
    private readonly stream: Stream,
    public readonly message: any,
  ) {}

  public getStreamId(): string {
    return this.stream.id.toString();
  }
}