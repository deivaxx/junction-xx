import { EStreamCategory } from "./EStreamCategory";
import { User } from "./User";

export class DataMessage {
  constructor(
    public readonly streamCategory: EStreamCategory,
    public readonly message: any,
    public readonly owner: User,
  ) {}
}
