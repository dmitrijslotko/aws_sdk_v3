const {sleep} = require("./sleep.js")
async function exponential_backoff(func_promise,retry_count = 5, wait_time_ms = 100, wait_time_multiplier = 1.2) {
    let try_number = 1
    let err
    do {
        try {
            const response = await func_promise
            return response
        } catch (error) {
            err = error
            console.warn(`Execution failed. Attempt: ${try_number} out of ${retry_count}. Error: ${err}`);
            await sleep(wait_time_ms);
            try_number++;
            wait_time_ms *= wait_time_multiplier;
        }
    } while (try_number <= retry_count);
    console.error(`All ${retry_count} retries have failed.`);
    throw err;
}

exports.exponential_backoff = exponential_backoff