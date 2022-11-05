import DataUnionClient from "@dataunions/client";
import { ADMIN_PRIVATE_KEY } from "../constants";
import { User } from "../domain/User";

export class UserDataUnionDisjoiner {
  public async disjoin(user: User, dataUnionAddress: string): Promise<void> {
    const dataUnionClient = new DataUnionClient({
      auth: {
        privateKey: ADMIN_PRIVATE_KEY,
      },
      chain: 'polygon',
    });
    const dataUnion = await dataUnionClient.getDataUnion(dataUnionAddress);
    await dataUnion.removeMembers([user.privateKey]);
  }
}
