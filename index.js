//#region Athena

const {
  AthenaClient,
  BatchGetQueryExecutionCommand,
  GetQueryExecutionCommand,
  GetQueryResultsCommand,
  StartQueryExecutionCommand,
  StopQueryExecutionCommand,
} = require("./athena/athena.js");
exports.AthenaClient = AthenaClient;
exports.BatchGetQueryExecutionCommand = BatchGetQueryExecutionCommand;
exports.GetQueryExecutionCommand = GetQueryExecutionCommand;
exports.GetQueryResultsCommand = GetQueryResultsCommand;
exports.StartQueryExecutionCommand = StartQueryExecutionCommand;
exports.StopQueryExecutionCommand = StopQueryExecutionCommand;
//#endregion Athena

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

//#region EC2

const {
  EC2Client,
  DescribeInstancesCommand,
  StopInstancesCommand,
  StartInstancesCommand,
} = require("./ec2/ec2.js");

exports.EC2Client = EC2Client;
exports.DescribeInstancesCommand = DescribeInstancesCommand;
exports.StopInstancesCommand = StopInstancesCommand;
exports.StartInstancesCommand = StartInstancesCommand;

//#endregion EC2

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

//#region Lambda
const {
  LambdaClient,
  InvokeAsyncCommand,
  InvokeCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
} = require("./lambda/lambda.js");
exports.LambdaClient = LambdaClient;
exports.InvokeAsyncCommand = InvokeAsyncCommand;
exports.InvokeCommand = InvokeCommand;
exports.UpdateFunctionCodeCommand = UpdateFunctionCodeCommand;
exports.UpdateFunctionConfigurationCommand = UpdateFunctionConfigurationCommand;

//#endregion Lambda

//#region RDS
const {
  RDSDataClient,
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  RollbackTransactionCommand,
} = require("./rds/rds_data.js");
exports.RDSDataClient = RDSDataClient;
exports.BatchExecuteStatementCommand = BatchExecuteStatementCommand;
exports.BeginTransactionCommand = BeginTransactionCommand;
exports.CommitTransactionCommand = CommitTransactionCommand;
exports.ExecuteSqlCommand = ExecuteSqlCommand;
exports.RDSExecuteStatementCommand = ExecuteStatementCommand;
exports.RollbackTransactionCommand = RollbackTransactionCommand;

//#endregion RDS

//#region Redshift
const {
  RedshiftDataClient,
  BatchExecuteStatementCommand,
  CancelStatementCommand,
  DescribeStatementCommand,
  ExecuteStatementCommand,
  GetStatementResultCommand,
} = require("./redshift/redshift_data.js");
exports.RedshiftDataClient = RedshiftDataClient;
exports.CancelStatementCommand = CancelStatementCommand;
exports.DescribeStatementCommand = DescribeStatementCommand;
exports.GetStatementResultCommand = GetStatementResultCommand;
exports.RedshiftExecuteStatementCommand = ExecuteStatementCommand;

//#endregion Redshift

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

//#region SFN

const {
  SFNClient,
  ListActivitiesCommand,
  ListExecutionsCommand,
  StartExecutionCommand,
  StopExecutionCommand,
} = require("./sfn/sfn.js");

exports.SFNClient = SFNClient;
exports.ListActivitiesCommand = ListActivitiesCommand;
exports.ListExecutionsCommand = ListExecutionsCommand;
exports.StartExecutionCommand = StartExecutionCommand;
exports.StopExecutionCommand = StopExecutionCommand;

//#endregion SFN

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

//#region Utils
const {sleep} = require("./utils/sleep.js");
exports.sleep = sleep;

//#endregion Utils
