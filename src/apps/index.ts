// TODO: deploy dataunionsss

import StreamrClient from "streamr-client";
import { AdminStreamCreator } from "../backend/controllers/AdminStreamCreator";
import { StreamrDataMessagePublisher } from "../backend/controllers/StreamrDataMessagePublisher";
import { UserDataUnionJoiner } from "../backend/controllers/UserDataUnionJoiner";
import { Address } from "../backend/domain/Address";
import { DataMessage } from "../backend/domain/DataMessage";
import { User } from "../backend/domain/User";

// const user = new User(
//   new Address("0x000000000001")  
// );
// const userStreamrClient = new StreamrClient({
//   auth: {
//       privateKey: user.privateKey,
//   }
// });
// const adminStreamCreator = new AdminStreamCreator();

// const RANDOM_SAMPLE_DATAUNION_ID = "0x0D483E10612F327FC11965Fc82E90dC19b140000"; // me la he inventau
// const MUSIC_STREAM_ID = "0x900000000000/music";
// const LOCATION_STREAM_ID = "0x800000000000/music";

// const main = async () => {
//   // just a sample demo actions

//   // TODO: creator view
//   await adminStreamCreator.create(MUSIC_STREAM_ID);
//   await adminStreamCreator.create(LOCATION_STREAM_ID);

//   // TODO: joiner view & resolve when user has to be joined to data union
//   await new UserDataUnionJoiner().join(user, RANDOM_SAMPLE_DATAUNION_ID);

//   // bellow conversation happens when client has executed finder view and knows ALL available streams
//   const oneMessage = new DataMessage(MUSIC_STREAM_ID, { "song": "pepito" });
//   await new StreamrDataMessagePublisher(userStreamrClient).publish(oneMessage)
//   const otherMessage = new DataMessage(LOCATION_STREAM_ID, { "where": "in mollete" });
//   await new StreamrDataMessagePublisher(userStreamrClient).publish(otherMessage);
// }


const someStreamId = "0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks";

const test = async () => {
  const streamr = new StreamrClient({
    auth: {
      privateKey: streamrAuthPrivateKey,
    },
  });

  streamr
    .publish('0x7f9f7a326e158c305c211662bba606263f159f2e/music-tracks', {
      artist: 'Test',
      song: 'Test Song',
      album: 'Test Album',
    })
    .then(console.log)
    .catch(console.error);
}

test();

