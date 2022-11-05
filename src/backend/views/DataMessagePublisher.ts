import { StreamrDataMessagePublisher } from "../controllers/StreamrDataMessagePublisher";
import { DataMessage } from "../domain/DataMessage";

export interface DataMessageToPublish {
  streamId: string;
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
      message.streamId,
      message.payload,
    );
    await this.publisher.publish(dataMessage);
  }
}
