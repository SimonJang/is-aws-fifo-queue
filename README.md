# is-aws-fifo-queue [![Build Status](https://travis-ci.org/SimonJang/is-aws-fifo-queue.svg?branch=master)](https://travis-ci.org/SimonJang/is-aws-fifo-queue)
Utility to check based on a queue name, that it is or could be an [AWS SQS FIFO](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html) queue

## Install

```
$ npm install is-aws-fifo-queue
```

## Usage

```js
const isAwsFifoQueue = require('is-aws-fifo-queue');

isAWSFifoQueue('correct-fifo-queue.fifo'); // true
isAWSFifoQueue('someQueue') // false

```

## API

### isAwsFifoQueue(name)

#### name

Type: `string`

Name of the queue that has to be validated
