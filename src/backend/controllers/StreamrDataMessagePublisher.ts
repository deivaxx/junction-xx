import { DataMessage } from "../domain/DataMessage";
import { User } from "../domain/User";
import { MockStreamRepository } from "../infrastructure/MockStreamRepository";
import { StreamrClientSingleton } from "../infrastructure/StreamrClientSignleton";

export class StreamrDataMessagePublisher {
  public async publish(dataMessage: DataMessage): Promise<void> {
    const streamrClient = StreamrClientSingleton.getInstance(dataMessage.owner);
    const stream = await new MockStreamRepository().find(dataMessage.streamCategory);
    const message = await streamrClient.publish(
      stream.id,
      dataMessage.message,
    );
    // TODO: remove console.log
    console.log("message published: ", message);
  }
}
