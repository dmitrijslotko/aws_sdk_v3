const {
  KinesisClient: client,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  SplitShardCommand,
  SubscribeToShardCommand,
  UpdateShardCountCommand,
} = require("@aws-sdk/client-kinesis");
const exponential_backoff = require("../utils/exponential_backoff.js");
const BaseClient = require("../base_clases/base_client.js");

class KinesisClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  KinesisClient,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  SplitShardCommand,
  SubscribeToShardCommand,
  UpdateShardCountCommand,
};
