const { KinesisClient, AddTagsToStreamCommand, CreateStreamCommand, DecreaseStreamRetentionPeriodCommand, DeleteStreamCommand, DeregisterStreamConsumerCommand, DescribeLimitsCommand, DescribeStreamCommand, DescribeStreamConsumerCommand, DescribeStreamSummaryCommand, DisableEnhancedMonitoringCommand, EnableEnhancedMonitoringCommand, GetRecordsCommand, GetShardIteratorCommand, IncreaseStreamRetentionPeriodCommand, ListShardsCommand, ListStreamConsumersCommand, ListStreamsCommand, ListTagsForStreamCommand, MergeShardsCommand, PutRecordCommand, PutRecordsCommand, RegisterStreamConsumerCommand, RemoveTagsFromStreamCommand, SplitShardCommand, StartStreamEncryptionCommand, StopStreamEncryptionCommand, SubscribeToShardCommand, UpdateShardCountCommand, UpdateStreamModeCommand } = require("@aws-sdk/client-kinesis");
const client = new KinesisClient();
const exponential_backoff = require("../utils/exponential_backoff.js")

add_tags_to_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, AddTagsToStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
create_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, CreateStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
decrease_stream_retention_period = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DecreaseStreamRetentionPeriodCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
delete_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DeleteStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
deregister_stream_consumer = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DeregisterStreamConsumerCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
describe_limits = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DescribeLimitsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
describe_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DescribeStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
describe_stream_consumer = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DescribeStreamConsumerCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
describe_stream_summary = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DescribeStreamSummaryCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
disable_enchanced_monitoring = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DisableEnhancedMonitoringCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
enable_enchanced_monitoring = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, EnableEnhancedMonitoringCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
get_records = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, GetRecordsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
get_shard_iterator = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, GetShardIteratorCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
increase_stream_retention_period = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, IncreaseStreamRetentionPeriodCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_shards = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListShardsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_stream_consumers = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListStreamConsumersCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_streams = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListStreamsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_tags_for_streams = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListTagsForStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
merge_shards = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, MergeShardsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
put_record = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, PutRecordCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
put_records = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, PutRecordsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
register_stream_consumer = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, RegisterStreamConsumerCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
remove_tags_from_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, RemoveTagsFromStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
split_shard = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, SplitShardCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
start_stream_encryption = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, StartStreamEncryptionCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
stop_stream_encryption = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, StopStreamEncryptionCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
subscribe_to_shard = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, SubscribeToShardCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
update_shard_count = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, UpdateShardCountCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
update_stream_mode = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, UpdateStreamModeCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};

exports.kinesis_client = { add_tags_to_stream, create_stream, decrease_stream_retention_period, delete_stream, deregister_stream_consumer, describe_limits, describe_stream, describe_stream_consumer, describe_stream_summary, disable_enchanced_monitoring, enable_enchanced_monitoring, get_records, get_shard_iterator, increase_stream_retention_period, list_shards, list_stream_consumers, list_streams, list_tags_for_streams, merge_shards, put_record, put_records, register_stream_consumer, remove_tags_from_stream, split_shard, start_stream_encryption, stop_stream_encryption, subscribe_to_shard, update_shard_count, update_stream_mode }