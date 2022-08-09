const {
  SecretsManagerClient,
  GetSecretValueCommand,
  RotateSecretCommand,
} = require("@aws-sdk/client-secrets-manager");
const client = new SecretsManagerClient();
const exponential_backoff = require("../utils/exponential_backoff.js");

get_secret_value = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    GetSecretValueCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

rotate_secret = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    RotateSecretCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.secret_manager = {
  get_secret_value,
  rotate_secret,
};
