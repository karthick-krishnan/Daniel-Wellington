"use-strict";
const requestUtil = require("../utils/request");
const config = require("../config");
const { db } = require("../db/db");
const componentName = "DW.productHandler";

/*
A function which gets the products from the assignment url
@param - {Object} an object which takes the parameters to filter the products
@param - {function }a callback function
*/
const getProducts = async (params, callback) => {
  try {
    let reqParams = {
      url: config.products.url,
    };
    console.log(componentName, null, params);
    let { products } = JSON.parse(await requestUtil.makeCall(reqParams));
    console.log(componentName, null, products);
    if (params.productId) {
      products = products.filter((product) => product.sku == params.productId);
    }
    callback(null, products);
  } catch (ex) {
    console.error(componentName, null, JSON.stringify(ex));
    callback(ex);
  }
};

/*
A function which gets the images from the assignment url
@param - {function }a callback function
*/
const getImages = async (callback) => {
  try {
    let reqParams = {
      url: config.images.url,
    };
    let { images } = JSON.parse(await requestUtil.makeCall(reqParams));
    callback(null, images);
  } catch (ex) {
    console.error(componentName, JSON.stringify(error), null);
    callback(JSON.stringify(ex));
  }
};

/*
A function which saves the product
@param - {Object} a params object
@param - {Object} a params items object
@param - {Function} a callback function
*/
const saveProduct = async (params, items, callback) => {
  try {
    let productItems = await getProductItems(params);
    console.log(componentName, null, JSON.stringify(productItems));
    /*
    if we have the product items we are skipping it from saving it ddb
    */
    if (!productItems.length) {
      let batchItems = _createBatchFormat(items);
      let data = await db.batchInsert(config.tableName, batchItems);
      callback(null, data);
    } else {
      callback(null, productItems);
    }
  } catch (error) {
    console.error(componentName, JSON.stringify(error), null);
    callback(JSON.stringify(error));
  }
};

/*
A function which gets the product items if the items are present in the database
@param - {function } a callback function
*/
const getProductItems = async (params) => {
  try {
    let productItem;
    if (params.productId) {
      productItem = await db.getItemById(
        config.tableName,
        "product_id",
        params.productId
      );
    } else {
      productItem = await db.getAllItems(config.tableName);
    }
    return productItem;
  } catch (ex) {
    console.error(componentName, JSON.stringify(ex), null);
    return ex;
  }
};

/*
@private
A function which creates a batch format to insert in the ddb
@productItems - an object of product Items
*/
const _createBatchFormat = (productItems) => {
  try {
    let batchItems = [];
    const productSeedItems = productItems.map((item) => {
      return {
        PutRequest: {
          Item: item,
        },
      };
    });
    /*
    Since it allows only 25 records at a time
    Creating a batch of items
    */
    if (productSeedItems.length > config.ddbBatchUploadLimit) {
      let quotient = Math.floor(
        productSeedItems.length / config.ddbBatchUploadLimit
      );
      let batchMultiplier = 1;
      while (quotient > 0) {
        for (
          let i = 0;
          i < productSeedItems.length;
          i += config.ddbBatchUploadLimit
        ) {
          batchItems.push(
            productSeedItems.slice(
              i,
              config.ddbBatchUploadLimit * batchMultiplier
            )
          );
          ++batchMultiplier;
          --quotient;
        }
      }
      return batchItems;
    } else {
      batchItems.push(productSeedItems);
    }
  } catch (ex) {
    console.error(componentName, JSON.stringify(ex), null);
    return ex;
  }
};

module.exports = {
  getProducts: getProducts,
  getImages: getImages,
  saveProduct: saveProduct,
};
