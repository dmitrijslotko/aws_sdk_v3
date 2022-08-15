const {
  SQSClient: client,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  SendMessageBatchCommand,
  SendMessageCommand,
} = require("@aws-sdk/client-sqs");

const BaseClient = require("../base_clases/base_client.js");

class SQSClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  SQSClient,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  SendMessageBatchCommand,
  SendMessageCommand,
};
