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
} = require("@aws-sdk/lib-dynamodb");

const {ddb_doc_client} = require("./ddb_doc_client.js");
exports.query = async (params) => {
  return ddb_doc_client.send(new QueryCommand(params));
};

exports.update = async (params) => {
  return ddb_doc_client.send(new UpdateCommand(params));
};

exports.get = async (params) => {
  return ddb_doc_client.send(new GetCommand(params));
};

exports.put = async (params) => {
  return ddb_doc_client.send(new PutCommand(params));
};

exports.delete = async (params) => {
  return ddb_doc_client.send(new DeleteCommand(params));
};

exports.batch_get = async (params) => {
  return ddb_doc_client.send(new BatchGetCommand(params));
};

exports.batch_write = async (params) => {
  return ddb_doc_client.send(new BatchWriteCommand(params));
};

exports.get_expression_attribute_names = (attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`#${attribute}`] = attribute;
  }
  return attribute_list;
};

exports.get_update_expression = (attributes) => {
  let str = "set ";
  for (const attribute of attributes) {
    str += `#${attribute} = :${attribute},`;
  }
  str = str.substring(0, str.length - 1);
  return str;
};

exports.get_expression_attribute_values = (obj, attributes) => {
  let attribute_list = {};
  for (const attribute of attributes) {
    attribute_list[`:${attribute}`] = obj[attribute];
  }
  return attribute_list;
};
