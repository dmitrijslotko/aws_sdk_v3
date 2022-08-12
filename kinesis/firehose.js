const {
  FirehoseClient: client,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand,
} = require("@aws-sdk/client-firehose");
const exponential_backoff = require("../utils/exponential_backoff.js");
const BaseClient = require("../base_clases/base_client.js");

class FirehoseClient extends BaseClient {
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
  FirehoseClient,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand,
};
