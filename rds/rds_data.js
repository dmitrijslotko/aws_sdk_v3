const {
  RDSDataClient: client,
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  RollbackTransactionCommand,
} = require("@aws-sdk/client-rds-data");

const BaseClient = require("../base_clases/base_client.js");

class RDSDataClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  RDSDataClient,
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  RollbackTransactionCommand,
};
