const client = require("./client");

async function init() {
  await client.set("user:1", "Diana"); //key should be in format <entity>:<id>
  const result = await client.get("user:1");
  console.log(result);
  // await client.expire('user:1', 5); // key will expire in 5 seconds
}

init();
