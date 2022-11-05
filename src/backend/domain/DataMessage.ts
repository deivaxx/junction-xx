
export class DataMessage {
  constructor(
    public readonly streamId: string,
    public readonly message: any,
  ) {}
}