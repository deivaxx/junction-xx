import DataUnionClient from "@dataunions/client";
import { ADMIN_PRIVATE_KEY } from "../constants";
import { User } from "../domain/User";

export class UserDataUnionJoiner {
  public async join(user: User, dataUnionAddress: string): Promise<void> {
    const dataUnionClient = new DataUnionClient({
      auth: {
        privateKey: ADMIN_PRIVATE_KEY,
      },
      chain: 'polygon',
    });
    const dataUnion = await dataUnionClient.getDataUnion(dataUnionAddress);
    await dataUnion.addMembers([user.privateKey])
  }
}
