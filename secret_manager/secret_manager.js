const {
  SecretsManagerClient: client,
  GetSecretValueCommand,
  RotateSecretCommand,
} = require("@aws-sdk/client-secrets-manager");
const exponential_backoff = require("../utils/exponential_backoff.js");

const BaseClient = require("../base_clases/base_client.js");

class SecretsManagerClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  SecretsManagerClient,
  GetSecretValueCommand,
  RotateSecretCommand,
};
