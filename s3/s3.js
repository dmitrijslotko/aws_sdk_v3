const {
  S3Client: client,
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectAttributesCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const exponential_backoff = require("../utils/exponential_backoff.js");
const BaseClient = require("../base_clases/base_client.js");

class S3Client extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  S3Client,
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectAttributesCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
};
