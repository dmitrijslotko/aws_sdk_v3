const {
  LambdaClient: client,
  InvokeAsyncCommand,
  InvokeCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
} = require("@aws-sdk/client-lambda");

const BaseClient = require("../base_clases/base_client.js");

class LambdaClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  LambdaClient,
  InvokeAsyncCommand,
  InvokeCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
};
