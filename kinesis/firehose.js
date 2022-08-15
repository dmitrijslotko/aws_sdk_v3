const {
  FirehoseClient: client,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand,
} = require("@aws-sdk/client-firehose");
const BaseClient = require("../base_clases/base_client.js");

class FirehoseClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  FirehoseClient,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand,
};
