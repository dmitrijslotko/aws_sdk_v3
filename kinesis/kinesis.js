const {
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
} = require("@aws-sdk/client-kinesis");
const client = new KinesisClient();
const exponential_backoff = require("../utils/exponential_backoff.js");

describe_limits = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DescribeLimitsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
describe_stream = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DescribeStreamCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
describe_stream_consumer = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DescribeStreamConsumerCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
describe_stream_summary = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DescribeStreamSummaryCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

get_records = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    GetRecordsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
get_shard_iterator = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    GetShardIteratorCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

list_shards = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ListShardsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
list_stream_consumers = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ListStreamConsumersCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
list_streams = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ListStreamsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

merge_shards = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    MergeShardsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
put_record = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PutRecordCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
put_records = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PutRecordsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

split_shard = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    SplitShardCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

subscribe_to_shard = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    SubscribeToShardCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
update_shard_count = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    UpdateShardCountCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.kinesis_client = {
  describe_limits,
  describe_stream,
  describe_stream_consumer,
  describe_stream_summary,
  get_records,
  get_shard_iterator,
  list_shards,
  list_stream_consumers,
  list_streams,
  merge_shards,
  put_record,
  put_records,
  split_shard,
  subscribe_to_shard,
  update_shard_count,
};
