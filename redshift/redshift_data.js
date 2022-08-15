const {
  RedshiftDataClient: client,
  BatchExecuteStatementCommand,
  CancelStatementCommand,
  DescribeStatementCommand,
  ExecuteStatementCommand,
  GetStatementResultCommand,
} = require("@aws-sdk/client-redshift-data");

const BaseClient = require("../base_clases/base_client.js");

class RedshiftDataClient extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  RedshiftDataClient,
  BatchExecuteStatementCommand,
  CancelStatementCommand,
  DescribeStatementCommand,
  ExecuteStatementCommand,
  GetStatementResultCommand,
};
