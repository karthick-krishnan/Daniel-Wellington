"use-strict";

module.exports = {
  products: {
    url: `${process.env.DW_HOST_URL}/products`,
  },
  images: {
    url: `${process.env.DW_HOST_URL}/images`,
  },
  ddb_batch_items_upload_limit: 25,
  tableName: "DW-Products",
};
