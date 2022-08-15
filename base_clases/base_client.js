const exponential_backoff = require("../utils/exponential_backoff.js");

class BaseClient {
  client = null;
  retry_count = 5;
  wait_time_ms = 100;
  wait_time_multiplier = 1.2;

  async send(command, params) {
    return exponential_backoff.exponential_backoff(
      this.client,
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
  }

  static async send(client, command, params) {
    try {
      const temp_client = new client();
      const response = exponential_backoff.exponential_backoff(
        new client(),
        command,
        params,
        this.retry_count,
        this.wait_time_ms,
        this.wait_time_multiplier
      );

      temp_client.destroy();
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  update_config(config) {
    const {retry_count, wait_time_ms, wait_time_multiplier, client} = config;
    if (retry_count) {
      this.retry_count = retry_count;
    }
    if (wait_time_ms) {
      this.wait_time_ms = wait_time_ms;
    }
    if (wait_time_multiplier) {
      this.wait_time_multiplier = wait_time_multiplier;
    }
    if (client) {
      this.client = client;
    }
  }

  async close_open_connection() {
    try {
      this.client.destroy();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BaseClient;
