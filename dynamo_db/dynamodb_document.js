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
  TransactWriteCommand,
} = require("@aws-sdk/lib-dynamodb");
const exponential_backoff = require("../utils/exponential_backoff.js");
const {DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");
const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const ddb_client = new DynamoDBClient();

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: false,
  convertClassInstanceToMap: false,
};

const unmarshallOptions = {
  wrapNumbers: false,
};

const translateConfig = {marshallOptions, unmarshallOptions};

const ddb_doc_client = DynamoDBDocumentClient.from(ddb_client, translateConfig);

transact_get = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    TransactGetCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

transact_write = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    TransactWriteCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

scan = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    ScanCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

query = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    QueryCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

update = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    UpdateCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

get = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    GetCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

put = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    PutCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

remove = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    DeleteCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

batch_get = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    BatchGetCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

batch_write = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    ddb_doc_client,
    BatchWriteCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.dynamodb_document_client = {
  scan,
  query,
  update,
  get,
  put,
  remove,
  batch_get,
  batch_write,
  transact_get,
  transact_write,
};
