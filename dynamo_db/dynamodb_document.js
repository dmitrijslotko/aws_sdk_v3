// 	link to the dynamo db v3 documentation
//  https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_lib_dynamodb.html

// link to aws cli
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#constructor-property

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
  TransactWriteCommand

} = require("@aws-sdk/lib-dynamodb");
const exponential_backoff = require("../utils/exponential_backoff.js")
const { ddb_doc_client } = require("./ddb_doc_client.js");

transact_get = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
  ) => {
    return exponential_backoff.exponential_backoff(ddb_doc_client.send(new TransactGetCommand(
      params)), retry_count, wait_time_ms, wait_time_multiplier)
  };

transact_write = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
  ) => {
    return exponential_backoff.exponential_backoff(ddb_doc_client.send(new TransactWriteCommand(
      params)), retry_count, wait_time_ms, wait_time_multiplier)
  };

scan = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new ScanCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

query = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new QueryCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

update = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new UpdateCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

get = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new GetCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

put = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new PutCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

remove = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new DeleteCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

batch_get = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new BatchGetCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

batch_write = async (params, retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) => {
  return exponential_backoff.exponential_backoff(ddb_doc_client.send(new BatchWriteCommand(
    params)), retry_count, wait_time_ms, wait_time_multiplier)
};

get_expression_attribute_names = (attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`#${attribute}`] = attribute;
  }
  return attribute_list;
};

get_update_expression = (attributes) => {
  let str = "set ";
  for (const attribute of attributes) {
    str += `#${attribute} = :${attribute},`;
  }
  str = str.substring(0, str.length - 1);
  return str;
};

get_expression_attribute_values = (obj, attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`:${attribute}`] = obj[attribute];
  }
  return attribute_list;
};

exports.dynamodb_client = { scan, query, update, get, put, remove, batch_get, batch_write, transact_get,transact_write, get_expression_attribute_names, get_update_expression, get_expression_attribute_values }