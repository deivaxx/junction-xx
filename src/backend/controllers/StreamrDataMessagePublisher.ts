import StreamrClient from "streamr-client";
import { DataMessage } from "../domain/DataMessage";
import { MockStreamRepository } from "../infrastructure/MockStreamRepository";

export class StreamrDataMessagePublisher {
  constructor(
    private readonly userStreamrClient: StreamrClient,
  ) {}

  public async publish(dataMessage: DataMessage): Promise<void> {
    const stream = await new MockStreamRepository().find(dataMessage.streamCategory);
    const idk = await this.userStreamrClient.publish(
      stream.id,
      dataMessage.message,
    );
    console.log("published eoeoeo: ", idk);
  }
}
