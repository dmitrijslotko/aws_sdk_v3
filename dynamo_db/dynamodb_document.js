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
  constructor(params) {
    super();
    this.client = client.from(new DynamoDBClient(params), translateConfig);
  }

  static send = async (command, params) => {
    return exponential_backoff.exponential_backoff(
      client.from(new DynamoDBClient(params), translateConfig),
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
  };

  static get_expression_attribute_names = (attributes) => {
    let attribute_list = {};
    for (const attribute of attributes) {
      attribute_list[`#${attribute}`] = attribute;
    }
    return attribute_list;
  };

  static get_update_expression = (attributes) => {
    let str = "set ";
    for (const attribute of attributes) {
      str += `#${attribute} = :${attribute},`;
    }
    str = str.substring(0, str.length - 1);
    return str;
  };

  static get_expression_attribute_values = (obj, attributes) => {
    let attribute_list = {};
    for (const attribute of attributes) {
      attribute_list[`:${attribute}`] = obj[attribute];
    }
    return attribute_list;
  };
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
