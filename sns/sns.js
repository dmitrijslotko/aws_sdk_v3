const {
  SNSClient,
  PublishBatchCommand,
  PublishCommand,
} = require("@aws-sdk/client-sns");
const client = new SNSClient();

const exponential_backoff = require("../utils/exponential_backoff.js");

publish_batch = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PublishBatchCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

publish = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PublishCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.sns_client = {
  publish_batch,
  publish,
};
