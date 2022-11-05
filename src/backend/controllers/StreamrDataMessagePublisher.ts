import StreamrClient from "streamr-client";
import { DataMessage } from "../domain/DataMessage";

export class StreamrDataMessagePublisher {
  constructor(
    private readonly userStreamrClient: StreamrClient,
  ) {}

  public async publish(dataMessage: DataMessage): Promise<void> {
    await this.userStreamrClient.publish(
      dataMessage.getStreamId(),
      dataMessage.message,
    );
  }
}
