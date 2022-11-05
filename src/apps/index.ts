// TODO: deploy dataunionsss

import StreamrClient from "streamr-client";
import { AdminStreamCreator } from "../backend/controllers/AdminStreamCreator";
import { StreamrDataMessagePublisher } from "../backend/controllers/StreamrDataMessagePublisher";
import { UserDataUnionJoiner } from "../backend/controllers/UserDataUnionJoiner";
import { Address } from "../backend/domain/Address";
import { DataMessage } from "../backend/domain/DataMessage";
import { EStreamCategory } from "../backend/domain/EStreamCategory";
import { Stream } from "../backend/domain/Stream";
import { User } from "../backend/domain/User";

const userAddress = "0x6208632444bd95c88107ad3351b944182803269c486e7b2b50fcdbde3d669467";

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
const MUSIC_STREAM_ID = "0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks";
const LOCATION_STREAM_ID = "0x800000000000/location";

const main = async () => {
  // just a sample demo actions

  // TODO: creator view
  await adminStreamCreator.create(new Stream(MUSIC_STREAM_ID, EStreamCategory.SOFT_MUSIC));
  await adminStreamCreator.create(new Stream(LOCATION_STREAM_ID, EStreamCategory.ACCURATE_LOCATION));

  // TODO: joiner view & resolve when user has to be joined to data union
  await new UserDataUnionJoiner().join(user, RANDOM_SAMPLE_DATAUNION_ID);

  // bellow conversation happens when client has executed finder view and knows ALL available streams
  const oneMessage = new DataMessage(MUSIC_STREAM_ID, { "song": "pepito" });
  await new StreamrDataMessagePublisher(userStreamrClient).publish(oneMessage)
  const otherMessage = new DataMessage(LOCATION_STREAM_ID, { "where": "in mollete" });
  await new StreamrDataMessagePublisher(userStreamrClient).publish(otherMessage);
}

main();
