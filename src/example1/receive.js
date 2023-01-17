const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) throw err;

  connection.createChannel((err, channel) => {
    if (err) throw err;
    const queue = "hello";
    channel.assertQueue(queue, {
      durable: false,
    });
    console.log(`Await messages in ${queue}. to exit, press CTRL+C`);
    channel.consume(
      queue,
      (msg) => {
        console.log(`[x] Receive ${msg.content.toString()}`);
      },
      {
        noAck: true,
      }
    );
  });
});
