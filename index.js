const {dynamodb_client} = require("./dynamo_db/dynamodb_document.js");
const {sleep} = require("./utils/sleep.js")

exports.dynamo_client = dynamodb_client;
exports.sleep = sleep
