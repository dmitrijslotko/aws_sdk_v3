const {
  FirehoseClient,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand,
} = require("@aws-sdk/client-firehose");
const client = new FirehoseClient();
const exponential_backoff = require("../utils/exponential_backoff.js");

describe_delivery_stream = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DescribeDeliveryStreamCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
list_delivery_streams = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ListDeliveryStreamsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

put_record_batch = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PutRecordBatchCommand,
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

exports.firehose_client = {
  describe_delivery_stream,
  list_delivery_streams,
  put_record_batch,
  put_record,
};
