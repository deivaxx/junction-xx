// TODO: deploy dataunionsss

import StreamrClient from "streamr-client";
import { AdminStreamCreator } from "../backend/controllers/AdminStreamCreator";
import { StreamrDataMessagePublisher } from "../backend/controllers/StreamrDataMessagePublisher";
import { UserDataUnionJoiner } from "../backend/controllers/UserDataUnionJoiner";
import { Address } from "../backend/domain/Address";
import { DataMessage } from "../backend/domain/DataMessage";
import { EStreamCategory } from "../backend/domain/EStreamCategory";
import { User } from "../backend/domain/User";

const userAddress = "TBD";

const user = new User(
  new Address(userAddress)  
);
const userStreamrClient = new StreamrClient({
  auth: {
      privateKey: user.privateKey,
  }
});
const adminStreamCreator = new AdminStreamCreator();
const RANDOM_SAMPLE_DATAUNION_ID = "0x0D483E10612F327FC11965Fc82E90dC19b140000"; // me la he inventau

const main = async () => {
  // just a sample demo actions

  // TODO: creator view
  await adminStreamCreator.createManyAvailable();

  // TODO: joiner view & resolve when user has to be joined to data union
  await new UserDataUnionJoiner().join(user, RANDOM_SAMPLE_DATAUNION_ID);

  // bellow conversation happens when client has executed finder view and knows ALL available streams
  const oneMessage = new DataMessage(EStreamCategory.SOFT_MUSIC, { "song": "pepito" });
  await new StreamrDataMessagePublisher(userStreamrClient).publish(oneMessage)
  const otherMessage = new DataMessage(EStreamCategory.ACCURATE_LOCATION, { "where": "in mollete" });
  await new StreamrDataMessagePublisher(userStreamrClient).publish(otherMessage);
}

main()
  .then(console.log)
  .catch(console.error);
