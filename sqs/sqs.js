const {
  SQSClient,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  SendMessageBatchCommand,
  SendMessageCommand,
} = require("@aws-sdk/client-sqs");
const client = new SQSClient();

const exponential_backoff = require("../utils/exponential_backoff.js");

delete_message_batch = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DeleteMessageBatchCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

delete_message = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DeleteMessageCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

receive_message = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ReceiveMessageCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

purge_queue = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PurgeQueueCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
send_message_batch = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    SendMessageBatchCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};
send_message = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    SendMessageCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.sqs_client = {
  delete_message_batch,
  delete_message,
  purge_queue,
  receive_message,
  send_message_batch,
  send_message,
};
