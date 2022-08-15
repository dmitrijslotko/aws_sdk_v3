const {
  AthenaClient: client,
  BatchGetQueryExecutionCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  StartQueryExecutionCommand,
  StopQueryExecutionCommand,
} = require("@aws-sdk/client-athena");

const BaseClient = require("../base_clases/base_client.js");

class AthenaClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  AthenaClient,
  BatchGetQueryExecutionCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  StartQueryExecutionCommand,
  StopQueryExecutionCommand,
};
