const client = require("./client");

async function init() {
  await client.lpush("messages", "hello"); // push value to the left of the list
  await client.lpush("messages", "how are you?");
  const result = await client.rpop("messages"); //pop value from the left of the list
  console.log(result);
  const result2 = await client.llen("messages"); //return the length of the list
  console.log(result2);
}

init();
