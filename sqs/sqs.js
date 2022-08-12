const {
  SQSClient: client,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  SendMessageBatchCommand,
  SendMessageCommand,
} = require("@aws-sdk/client-sqs");

const exponential_backoff = require("../utils/exponential_backoff.js");
const BaseClient = require("../base_clases/base_client.js");

class SQSClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static send = async (command, params) => {
    return exponential_backoff.exponential_backoff(
      new client(),
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
  };
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
