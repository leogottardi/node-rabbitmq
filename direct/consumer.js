const amqp = require('amqplib')

amqp.connect('amqp://guest:guest@localhost:5672').then(conn => {
  conn.createChannel().then(ch => {
    ch.consume('queue.direct', msg => {
      console.log(` [x] Received ${msg.content.toString()}`)
    }, {noAck: true})
  })
})