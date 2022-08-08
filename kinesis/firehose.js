const { FirehoseClient, CreateDeliveryStreamCommand, DeleteDeliveryStreamCommand, DescribeDeliveryStreamCommand, ListDeliveryStreamsCommand, ListTagsForDeliveryStreamCommand, PutRecordBatchCommand, PutRecordCommand, StartDeliveryStreamEncryptionCommand, StopDeliveryStreamEncryptionCommand, TagDeliveryStreamCommand, UntagDeliveryStreamCommand, UpdateDestinationCommand } = require("@aws-sdk/client-firehose");
const client = new FirehoseClient();
const exponential_backoff = require("../utils/exponential_backoff.js")

create_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, CreateDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
delete_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DeleteDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
describe_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, DescribeDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_delivery_streams = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListDeliveryStreamsCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
list_tags_for_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, ListTagsForDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
put_record_batch = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, PutRecordBatchCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
put_record = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, PutRecordCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
start_delivery_stream_encryption = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, StartDeliveryStreamEncryptionCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
stop_delivery_stream_encryption = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, StopDeliveryStreamEncryptionCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
tag_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, TagDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
untag_delivery_stream = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, UntagDeliveryStreamCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};
update_destination = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
    return exponential_backoff.exponential_backoff(client, UpdateDestinationCommand,
        params, retry_count, wait_time_ms, wait_time_multiplier)
};

exports.firehose_client = { create_delivery_stream, delete_delivery_stream, describe_delivery_stream, list_delivery_streams, list_tags_for_delivery_stream, put_record_batch, put_record, start_delivery_stream_encryption, stop_delivery_stream_encryption, tag_delivery_stream, untag_delivery_stream, update_destination }