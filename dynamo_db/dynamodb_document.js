const {
  QueryCommand,
  UpdateCommand,
  GetCommand,
  PutCommand,
  DeleteCommand,
  BatchGetCommand,
  BatchWriteCommand,
  ScanCommand,
  TransactGetCommand,
  TransactWriteCommand,
} = require("@aws-sdk/lib-dynamodb");
const {DynamoDBDocumentClient: client} = require("@aws-sdk/lib-dynamodb");
const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");

const exponential_backoff = require("../utils/exponential_backoff.js");
const BaseClient = require("../base_clases/base_client.js");
const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: false,
  convertClassInstanceToMap: false,
};
const unmarshallOptions = {
  wrapNumbers: false,
};
const translateConfig = {marshallOptions, unmarshallOptions};
class DynamoDBDocumentClient extends BaseClient {
  db_client = null;
  constructor(params) {
    super();
    this.db_client = new DynamoDBClient(params);
    this.client = client.from(db_client, translateConfig);
  }

  static async send(command, params) {
    const temp_db_client = new DynamoDBClient();
    const temp_client = client.from(temp_db_client, translateConfig);
    const response = exponential_backoff.exponential_backoff(
      temp_client,
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
    temp_db_client.destroy();
    temp_client.destroy();
    return response;
  }

  async close_open_connection() {
    try {
      super.close_open_connection();
      this.db_client.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  static get_expression_attribute_names(attributes) {
    let attribute_list = {};
    for (const attribute of attributes) {
      attribute_list[`#${attribute}`] = attribute;
    }
    return attribute_list;
  }

  static get_update_expression(attributes) {
    let str = "set ";
    for (const attribute of attributes) {
      str += `#${attribute} = :${attribute},`;
    }
    str = str.substring(0, str.length - 1);
    return str;
  }

  static get_expression_attribute_values(obj, attributes) {
    let attribute_list = {};
    for (const attribute of attributes) {
      attribute_list[`:${attribute}`] = obj[attribute];
    }
    return attribute_list;
  }
}

module.exports = {
  DynamoDBDocumentClient,
  QueryCommand,
  UpdateCommand,
  GetCommand,
  PutCommand,
  DeleteCommand,
  BatchGetCommand,
  BatchWriteCommand,
  ScanCommand,
  TransactGetCommand,
  TransactWriteCommand,
};
