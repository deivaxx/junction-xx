import { StreamrDataMessagePublisher } from "../controllers/StreamrDataMessagePublisher";
import { DataMessage } from "../domain/DataMessage";
import { Stream } from "../domain/Stream";
import { StreamIdentifier } from "../domain/StreamIdentifier";

export interface DataMessageToPublish {
  streamDomain: string;
  streamPath: string;
  payload: any;
} 

export class DataMessagePublisher {
  constructor(
    private readonly publisher: StreamrDataMessagePublisher,
  ) {}

  public async execute(
    message: DataMessageToPublish,
  ): Promise<void> {
    const dataMessage = new DataMessage(
      new Stream(
        new StreamIdentifier(message.streamDomain, message.streamPath),
      ),
      message.payload,
    );
    await this.publisher.publish(dataMessage);
  }
}
