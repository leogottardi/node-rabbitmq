const amqp = require('amqplib')

amqp.connect('amqp://guest:guest@localhost:5672').then(conn => {
  conn.createChannel().then(ch => {
    ch.consume('test-queue', msg => {
      console.log(` [x] Received ${msg.content.toString()}`)
    }, {noAck: true})
  })
})