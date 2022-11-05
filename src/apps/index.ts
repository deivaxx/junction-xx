// TODO: deploy dataunionsss

import StreamrClient from "streamr-client";
import { AdminStreamCreator } from "../backend/controllers/AdminStreamCreator";
import { StreamFinder } from "../backend/controllers/StreamFinder";
import { StreamrDataMessagePublisher } from "../backend/controllers/StreamrDataMessagePublisher";
import { UserDataUnionJoiner } from "../backend/controllers/UserDataUnionJoiner";
import { Address } from "../backend/domain/Address";
import { User } from "../backend/domain/User";
import { DataMessagePublisher } from "../backend/views/DataMessagePublisher";

const user = new User(
  new Address("0x000000000001")  
);
const userStreamrClient = new StreamrClient({
  auth: {
      privateKey: user.privateKey,
  }
});
const adminStreamCreator = new AdminStreamCreator();

const RANDOM_SAMPLE_DATAUNION_ID = "0x0D483E10612F327FC11965Fc82E90dC19b140000"; // me la he inventau
const MUSIC_STREAM = {
  domain: "0x900000000000",
  path: "music",
};
const LOCATION_STREAM = {
  domain: "0x800000000000",
  path: "location",
};

const main = async () => {
  // just a sample demo actions

  // TODO: creator view
  await adminStreamCreator.create(MUSIC_STREAM.domain, MUSIC_STREAM.path);
  await adminStreamCreator.create(LOCATION_STREAM.domain, LOCATION_STREAM.path);

  // TODO: joiner view & resolve when user has to be joined to data union
  await new UserDataUnionJoiner().join(user, RANDOM_SAMPLE_DATAUNION_ID);

  // bellow conversation happens when client has executed finder view and knows ALL available streams
  const oneMessage = { streamDomain: "0x900000000000", streamPath: "music", payload: { "song": "pepito" } };
  await new DataMessagePublisher(
    new StreamrDataMessagePublisher(userStreamrClient)
  ).execute(oneMessage);
  const otherMessage = { streamDomain: "0x800000000000", streamPath: "location", payload: { "where": "in mollete" } };
  await new DataMessagePublisher(
    new StreamrDataMessagePublisher(userStreamrClient)
  ).execute(otherMessage);
}


main();
userStreamrClient.destroy();
