const {
  SecretsManagerClient,
  GetSecretValueCommand,
  RotateSecretCommand,
} = require("@aws-sdk/client-secrets-manager");
const exponential_backoff = require("../utils/exponential_backoff.js");

const BaseClient = require("../base_clases/base_client.js");

class SecretsManager extends BaseClient {
  constructor(params) {
    super();
    this.client = new SecretsManagerClient(params);
  }

  static send = async (command, params) => {
    return exponential_backoff.exponential_backoff(
      new SecretsManagerClient(),
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
  };
}

module.exports = {
  SecretsManager,
  GetSecretValueCommand,
  RotateSecretCommand,
};
