const {dynamodb_document_client} = require("./dynamo_db/dynamodb_document.js");
const {kinesis_client} = require("./kinesis/kinesis.js");
const {firehose_client} = require("./kinesis/firehose.js");
const {s3_client} = require("./s3/s3.js");
const {sns_client} = require("./sns/sns.js");
const {sqs_client} = require("./sqs/sqs.js");
const {secret_manager} = require("./secret_manager/secret_manager.js");

const {sleep} = require("./utils/sleep.js");

exports.secret_manager = secret_manager;
exports.sqs_client = sqs_client;
exports.sns_client = sns_client;
exports.s3_client = s3_client;
exports.firehose_client = firehose_client;
exports.kinesis_client = kinesis_client;
exports.dynamodb_document_client = dynamodb_document_client;
exports.sleep = sleep;
