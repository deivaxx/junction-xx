import StreamrClient from "streamr-client";
import { User } from "../domain/User";

export class StreamrClientSingleton {
  private static instance?: StreamrClient;

  public static getInstance(user: User): StreamrClient {
    if (!this.instance) {
      this.instance = new StreamrClient({
        auth: {
            privateKey: user.privateKey,
        }
      });
    }
    return this.instance;
  }

  public static async destroyInstance(): Promise<void> {
    if(this.instance) {
      await this.instance.destroy();
      this.instance = undefined;
    }
  }
}
