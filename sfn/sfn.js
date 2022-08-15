const {
  SFNClient: client,
  ListActivitiesCommand,
  ListExecutionsCommand,
  StartExecutionCommand,
  StopExecutionCommand,
} = require("@aws-sdk/client-sfn");

const BaseClient = require("../base_clases/base_client.js");

class SFNClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  SFNClient,
  ListActivitiesCommand,
  ListExecutionsCommand,
  StartExecutionCommand,
  StopExecutionCommand,
};
