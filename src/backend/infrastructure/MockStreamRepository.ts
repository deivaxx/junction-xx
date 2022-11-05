import { EStreamCategory, locationStreamCategories, musicStreamCategories } from "../domain/EStreamCategory";
import { Stream } from "../domain/Stream";

const streams = [
  new Stream("0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks", EStreamCategory.EXTENDED_MUSIC),
  new Stream("0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks", EStreamCategory.SOFT_MUSIC),
  new Stream("0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks", EStreamCategory.ACCURATE_LOCATION),
  new Stream("0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks", EStreamCategory.SOFT_LOCATION),
];

export class MockStreamRepository {
  public async findManyAvailable(): Promise<Stream[]> {
    return Promise.resolve(streams);
  }

  public async find(category: EStreamCategory): Promise<Stream> {
    const stream = streams.find(stream => stream.category === category);
    if (!stream) {
      // TODO: manage with NullObject pattern
      return {} as Stream;
    }
    return Promise.resolve(stream);
  }

  // TODO: criteria pattern
  public async findMusic(): Promise<Stream[]> {
    return Promise.resolve(streams.filter(stream => musicStreamCategories.includes(stream.category)));
  }

  public async findLocation(): Promise<Stream[]> {
    return Promise.resolve(streams.filter(stream => locationStreamCategories.includes(stream.category)));
  }
}
