const amqp = require('amqplib')

amqp.connect('amqp://guest:guest@localhost:5672').then(conn => {
  conn.createChannel().then(ch => {
    ch.consume('queue.fanout1', msg => {
      console.log(` [x] Received(fanout1) ${msg.content.toString()}`)
    }, {noAck: true})

    ch.consume('queue.fanout2', msg => {
      console.log(` [x] Received(fanout2) ${msg.content.toString()}`)
    }, {noAck: true})

    ch.consume('queue.fanout3', msg => {
      console.log(` [x] Received(fanout3) ${msg.content.toString()}`)
    }, {noAck: true})
  })
})