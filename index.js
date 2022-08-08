const {dynamodb_document_client} = require("./dynamo_db/dynamodb_document.js");
const {kinesis_client} = require("./kinesis/kinesis.js");
const {firehose_client} = require("./kinesis/firehose.js");

const {sleep} = require("./utils/sleep.js");

exports.firehose_client = firehose_client;
exports.kinesis_client = kinesis_client;
exports.dynamodb_document_client = dynamodb_document_client;
exports.sleep = sleep;
