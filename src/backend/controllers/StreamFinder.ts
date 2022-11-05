
export class StreamFinder {
  constructor(
    private streamIds: string[],
  ) {}

  public async findAll(): Promise<string[]> {
    return Promise.resolve(this.streamIds.slice());
  }
}
