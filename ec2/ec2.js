const {
  EC2Client: client,
  DescribeInstancesCommand,
  StopInstancesCommand,
  StartInstancesCommand,
} = require("@aws-sdk/client-ec2");

const BaseClient = require("../base_clases/base_client.js");

class EC2Client extends BaseClient {
  constructor(params) {
    super();
    this.client = new client(params);
  }

  static async send(command, params) {
    return super.send(client, command, params);
  }
}

module.exports = {
  EC2Client,
  DescribeInstancesCommand,
  StopInstancesCommand,
  StartInstancesCommand,
};
