const {
  S3Client,
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectAttributesCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const client = new S3Client();
const exponential_backoff = require("../utils/exponential_backoff.js");

copy_object = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    CopyObjectCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

delete_object = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DeleteObjectCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

delete_objects = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    DeleteObjectsCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

get_object_attributes = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    GetObjectAttributesCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

get_object = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    GetObjectCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

get_objects = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    ListObjectsV2Command,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

put_object = async (
  params,
  retry_count = 5,
  wait_time_ms = 100,
  wait_time_multiplier = 1.2
) => {
  return exponential_backoff.exponential_backoff(
    client,
    PutObjectCommand,
    params,
    retry_count,
    wait_time_ms,
    wait_time_multiplier
  );
};

exports.s3_client = {
  copy_object,
  delete_object,
  delete_objects,
  get_object_attributes,
  get_object,
  get_objects,
  put_object,
};
