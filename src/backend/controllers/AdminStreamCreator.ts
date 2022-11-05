import StreamrClient from "streamr-client";
import { ADMIN_PRIVATE_KEY } from "../constants";
import { Stream } from "../domain/Stream";

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
}
