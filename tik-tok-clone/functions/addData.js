const { createClient } = require("@astrajs/collections");

const collection = 'tktkposts';

exports.handler = async function (event, context, callback) {
// create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
});

const posts = astraClient
.namespace(process.env.ASTRA_DB_KEYSPACE)
.collection(collection)

const data = [
{
  id: 0,
  name: "Satoru Gojo",
  username: "blindmesenpai",
  avatar: "https://i.imgur.com/01iUdAk.jpg",
  is_followed: true,
  video: "https://i.imgur.com/FTBP02Y.mp4",
  caption: "These ducks are MEGA cute",
  likes: 10,
  comments: 2,
  timestamp: "2019-03-10T09:08:31.020Z",
  button_visible: true,
},
{
  id: 1,
  name: "Tony Stark",
  username: "manofiron",
  avatar: "https://i.imgur.com/lLBczKX.jpg",
  is_followed: false,
  video: "https://i.imgur.com/1A7AKoF.mp4",
  caption: "When your fries give you attitude #getInMyBelly",
  likes: 12,
  comments: 2,
  timestamp: "2020-03-10T09:08:31.020Z",
  button_visible: true,
},
{
  id: 2,
  name: "Toph Beifong",
  username: "theblindbandit",
  avatar: "https://i.imgur.com/Y1ppDeG.jpg",
  is_followed: true,
  video: "https://i.imgur.com/al6MLay.mp4",
  caption: "Happiest of Birthdays my Angel",
  likes: 2,
  comments: 4,
  timestamp: "2020-04-10T09:08:31.020Z",
  button_visible: true,
},
{
  id: 3,
  name: "Squall Leonhart",
  username: "whatever",
  avatar: "https://i.imgur.com/C4nEUPf.jpg",
  is_followed: true,
  video: "https://i.imgur.com/Kzvbeup.mp4",
  caption: "The new normal",
  likes: 10,
  comments: 2,
  timestamp: "2020-05-10T09:08:31.020Z",
  button_visible: true,
},
{
  id: 4,
  name: "Loki Laufeyson",
  username: "mainvariant",
  avatar: "https://i.imgur.com/yBlDJQH.jpg",
  is_followed: true,
  video: "https://i.imgur.com/H9UX0Jm.mp4",
  caption: "Art is for everyone",
  likes: 231,
  comments: 20,
  timestamp: "2020-09-10T09:08:31.020Z",
  button_visible: true,
},
]

try {
for (let i = 0; i < data.length; i++) {
  await posts.create(data[i].id, data[i])
}

return {
  statusCode: 200,
}
} catch (e) {
console.error(e);
return {
  statusCode: 500,
  body: JSON.stringify(e),
}
}
}
