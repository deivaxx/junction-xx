import StreamrClient from "streamr-client";
import { ADMIN_PRIVATE_KEY } from "../constants";
import { Stream } from "../domain/Stream";
import { MockStreamRepository } from "../infrastructure/MockStreamRepository";

export class AdminStreamCreator {
  public async create(stream: Stream): Promise<void> {
    const streamr = new StreamrClient({
      auth: {
          privateKey: ADMIN_PRIVATE_KEY,
      }
    });
    await streamr.createStream({
      id: stream.id,
    });
    await streamr.destroy();
  }

  public async createManyAvailable(): Promise<void> {
    const streamr = new StreamrClient({
      auth: {
          privateKey: ADMIN_PRIVATE_KEY,
      }
    });
    const availableStreams = await new MockStreamRepository().findManyAvailable();
    for (const stream of availableStreams) {
      await streamr.createStream({
        id: stream.id,
      });
    }
    await streamr.destroy();
  }
}
