// Create service client module using ES6 syntax.
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// Set the AWS Region.
// Create an Amazon DynamoDB service client object.
const ddb_client = new DynamoDBClient();
module.exports = { ddb_client };
