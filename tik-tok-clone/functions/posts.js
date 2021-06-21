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

    try {
        const res = await posts.find();
          return {
              statusCode: 200,
              body: JSON.stringify(res)
          }
    } catch (e) {
        console.error(e)
        statusCode: 500
        body: JSON.stringify(e)
    }


}

