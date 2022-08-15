const {
  SNSClient: client,
  PublishBatchCommand,
  PublishCommand,
} = require("@aws-sdk/client-sns");

const BaseClient = require("../base_clases/base_client.js");

class SNSClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  SNSClient,
  PublishBatchCommand,
  PublishCommand,
};
