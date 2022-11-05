import StreamrClient from "streamr-client";
import { ADMIN_PRIVATE_KEY } from "../constants";

export class AdminStreamCreator {
  public async create(streamId: string): Promise<void> {
    const streamr = new StreamrClient({
      auth: {
          privateKey: ADMIN_PRIVATE_KEY,
      }
    });
    await streamr.createStream({
      id: `${ADMIN_PRIVATE_KEY}/${streamId}`
    });
    await streamr.destroy();
  }
}
