import { Stream } from "../domain/Stream";

export class StreamFinder {
  constructor(
    private streams: Stream[],
  ) {}

  public async findAll(): Promise<Stream[]> {
    return Promise.resolve(this.streams.slice());
  }
}
