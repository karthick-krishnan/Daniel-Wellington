"use-strict";
const env = process.env.NODE_ENV || "local.js";
const config = require(`./${env}`);

module.exports = {
  products: config.products,
  images: config.images,
  ddbBatchUploadLimit: config.ddb_batch_items_upload_limit,
  tableName : config.tableName
};
