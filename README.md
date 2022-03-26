# Basic Usage RabbitMQ

# Summary

- [📑 About](#-about)
- [🚀 Technologies used](#-technologies-used)
- [📓 Get started](#-get-started)
- [📦 How to download the project ](#-how-to-download-the-project)

---

## 📑 About

## The project was about demonstrating the basic use of a connection between a publisher and a consumer to a rabbitmq service.

## 🚀 Technologies used

The project was developed using the following technologies:

- [javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [node.js](https://nodejs.dev/)
- [amqplib](https://www.npmjs.com/package/amqplib)

---

## 📓 Get started

> make sure you have docker and docker-compose installed to start the rabbitmq service

Use the command below to start rabbitmq on port 15672:

```
// start the container in background
$ docker-compose up -d
```

With the service started, access the rabbitmq interface and create an exchange and a queue with the following names:

```
Exchange: test-exchange
Queue: test-queue
```

Now everything is set up for the project to run.

Open 2 terminal tabs, one for the publisher and one for the consumer.

On the publisher tab, write the message to be sent to the exchange.

In the consumer tab, see the messages

---

Example:

![Screenshot](https://raw.githubusercontent.com/leogottardi/basic-usage-rabbitmq/master/.github/use-example.png)

---

## 📦 How to download the project

```bash
    # Clone the repository
    $ git clone git@github.com:leogottardi/basic-usage-rabbitmq.git

    # Enter on directory
    $ cd basic-usage-rabbitmq

    # Install dependencies
    $ npm install
```
