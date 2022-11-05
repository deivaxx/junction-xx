import StreamrClient from "streamr-client";
import { ADMIN_PRIVATE_KEY } from "../constants";
import { Stream } from "../domain/Stream";
import { StreamIdentifier } from "../domain/StreamIdentifier";

export class AdminStreamCreator {
  public async create(domain: string, path: string): Promise<Stream> {
    const stream = new Stream(
      new StreamIdentifier(domain, path),
    );
    const streamr = new StreamrClient({
      auth: {
          privateKey: ADMIN_PRIVATE_KEY,
      }
    });
    await streamr.createStream({
      id: `${ADMIN_PRIVATE_KEY}/${stream.id.toString()}`
    });
    await streamr.destroy();
    return stream;
  }
}