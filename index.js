//#region S3
const {
  S3Client,
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectAttributesCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} = require("./s3/s3.js");
exports.S3Client = S3Client;
exports.CopyObjectCommand = CopyObjectCommand;
exports.DeleteObjectCommand = DeleteObjectCommand;
exports.DeleteObjectsCommand = DeleteObjectsCommand;
exports.GetObjectAttributesCommand = GetObjectAttributesCommand;
exports.GetObjectCommand = GetObjectCommand;
exports.ListObjectsV2Command = ListObjectsV2Command;
exports.PutObjectCommand = PutObjectCommand;
//#endregion S3

//#region Firehose

const {
  FirehoseClient,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  PutRecordBatchCommand,
  PutRecordCommand: FirehosePutRecordCommand,
} = require("./kinesis/firehose.js");

exports.FirehoseClient = FirehoseClient;
exports.DescribeDeliveryStreamCommand = DescribeDeliveryStreamCommand;
exports.ListDeliveryStreamsCommand = ListDeliveryStreamsCommand;
exports.FirehosePutRecordCommand = FirehosePutRecordCommand;
exports.PutRecordBatchCommand = PutRecordBatchCommand;

//#endregion Firehose

//#region Kinesis

const {
  KinesisClient,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  MergeShardsCommand,
  PutRecordCommand: KinesisPutRecordCommand,
  PutRecordsCommand,
  SplitShardCommand,
  SubscribeToShardCommand,
  UpdateShardCountCommand,
} = require("./kinesis/kinesis.js");

exports.KinesisClient = KinesisClient;
exports.DescribeLimitsCommand = DescribeLimitsCommand;
exports.DescribeStreamCommand = DescribeStreamCommand;
exports.DescribeStreamConsumerCommand = DescribeStreamConsumerCommand;
exports.DescribeStreamSummaryCommand = DescribeStreamSummaryCommand;
exports.GetRecordsCommand = GetRecordsCommand;
exports.GetShardIteratorCommand = GetShardIteratorCommand;
exports.ListShardsCommand = ListShardsCommand;
exports.ListStreamConsumersCommand = ListStreamConsumersCommand;
exports.ListStreamsCommand = ListStreamsCommand;
exports.MergeShardsCommand = MergeShardsCommand;
exports.KinesisPutRecordCommand = KinesisPutRecordCommand;
exports.PutRecordsCommand = PutRecordsCommand;
exports.SplitShardCommand = SplitShardCommand;
exports.SubscribeToShardCommand = SubscribeToShardCommand;
exports.UpdateShardCountCommand = UpdateShardCountCommand;

//#endregion Kinesis

//#region SecretsManager
const {
  SecretsManagerClient,
  GetSecretValueCommand,
  RotateSecretCommand,
} = require("./secret_manager/secret_manager.js");

exports.SecretsManagerClient = SecretsManagerClient;
exports.GetSecretValueCommand = GetSecretValueCommand;
exports.RotateSecretCommand = RotateSecretCommand;

//#endregion SecretsManager

//#region SNS

const {
  SNSClient,
  PublishBatchCommand,
  PublishCommand,
} = require("./sns/sns.js");

exports.SNSClient = SNSClient;
exports.PublishBatchCommand = PublishBatchCommand;
exports.PublishCommand = PublishCommand;

//#endregion SNS

//#region SQS

const {
  SQSClient,
  DeleteMessageBatchCommand,
  DeleteMessageCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  SendMessageBatchCommand,
  SendMessageCommand,
} = require("./sqs/sqs.js");

exports.SQSClient = SQSClient;
exports.DeleteMessageBatchCommand = DeleteMessageBatchCommand;
exports.DeleteMessageCommand = DeleteMessageCommand;
exports.PurgeQueueCommand = PurgeQueueCommand;
exports.ReceiveMessageCommand = ReceiveMessageCommand;
exports.SendMessageBatchCommand = SendMessageBatchCommand;
exports.SendMessageCommand = SendMessageCommand;

//#endregion SQS

//#region DynamoDB

// 	link to the dynamo db v3 documentation
//  https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_lib_dynamodb.html

// link to aws cli
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#constructor-property

const {
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
} = require("./dynamo_db/dynamodb_document.js");

exports.DynamoDBDocumentClient = DynamoDBDocumentClient;
exports.QueryCommand = QueryCommand;
exports.UpdateCommand = UpdateCommand;
exports.GetCommand = GetCommand;
exports.PutCommand = PutCommand;
exports.DeleteCommand = DeleteCommand;
exports.BatchGetCommand = BatchGetCommand;
exports.QueryCommand = QueryCommand;
exports.TransactWriteCommand = TransactWriteCommand;
exports.BatchWriteCommand = BatchWriteCommand;
exports.ScanCommand = ScanCommand;
exports.TransactGetCommand = TransactGetCommand;

//#endregion DynamoDB

exports.s3_client = s3_client;
exports.firehose_client = firehose_client;

//#region Utils
const {sleep} = require("./utils/sleep.js");
exports.sleep = sleep;

//#endregion Utils
