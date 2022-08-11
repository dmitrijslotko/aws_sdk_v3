const exponential_backoff = require("../utils/exponential_backoff.js");

class BaseClient {
  client = null;
  retry_count = 5;
  wait_time_ms = 100;
  wait_time_multiplier = 1.2;

  constructor() {
  
  }
  send = async (command, params) => {
    return exponential_backoff.exponential_backoff(
      this.client,
      command,
      params,
      this.retry_count,
      this.wait_time_ms,
      this.wait_time_multiplier
    );
  };

  update_config = (config) => {
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
  };
}

module.exports = BaseClient;
