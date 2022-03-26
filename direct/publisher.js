const readline = require('readline')
const amqp = require('amqplib')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
})

amqp.connect('amqp://guest:guest@localhost:5672').then(conn => {
  conn.createChannel().then(ch => {
    rl.on('line', line => {
      ch.publish('amq.direct', '', Buffer.from(line))
      console.log(` [x] Sent ${line}`)
    })
  })
})