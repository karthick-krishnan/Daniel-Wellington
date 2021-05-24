"use-strict";
const products = require("./handlers/products");
const jsonResponse = require("./utils/response");
const {
  SUCCESS,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} = require("./utils/response-codes");
const component = "DW.Index.handler";

exports.handler = (event, context, callback) => {
  try {
    let params = {};

    console.log("Initializing Lambda.......!");

    if (event.productId) {
      params.productId = event.productId;
    }
    console.log(component, null, JSON.stringify(event));

    //Get all the products from the assignment url
    products.getProducts(params, (error, productsData) => {
      if (error) {
        console.error(component, JSON.stringify(error), null);
        callback(
          jsonResponse(
            INTERNAL_SERVER_ERROR.code,
            INTERNAL_SERVER_ERROR.msg,
            error,
            null
          )
        );
      } else if (productsData.length) {
        console.log(component, null, JSON.stringify(productsData));
        //Get all the Images from the images url
        products.getImages((error, images) => {
          if (error) {
            console.log(component, null, JSON.stringify(productsData));
            callback(
              jsonResponse(
                INTERNAL_SERVER_ERROR.code,
                INTERNAL_SERVER_ERROR.msg,
                error,
                null
              )
            );
          } else {
            console.log(component, null, JSON.stringify(images));
            //Assigning images to each data
            productsData.forEach((element, index) => {
              productsData[index].product_id = element.sku;
              productsData[index].images = images[element.sku];
            });
            //Saving the products from the assignment url
            products.saveProduct(params, productsData, (error, data) => {
              try {
                if (error) {
                  callback(
                    jsonResponse(
                      INTERNAL_SERVER_ERROR.code,
                      INTERNAL_SERVER_ERROR.msg,
                      error,
                      null
                    )
                  );
                } else {
                  console.log(component, null, JSON.stringify(data));
                  return callback(
                    null,
                    jsonResponse(SUCCESS.code, SUCCESS.msg, null, {
                      products: productsData,
                    })
                  );
                }
              } catch (ex) {
                console.error(component, JSON.stringify(ex), null);
                return callback(
                  jsonResponse(
                    INTERNAL_SERVER_ERROR.code,
                    INTERNAL_SERVER_ERROR.msg,
                    ex,
                    null
                  )
                );
              }
            });
          }
        });
      } else {
        callback(null, jsonResponse(NO_CONTENT.code, NO_CONTENT.msg, null, []));
      }
    });
  } catch (ex) {
    callback(
      jsonResponse(
        INTERNAL_SERVER_ERROR.code,
        INTERNAL_SERVER_ERROR.msg,
        ex,
        null
      )
    );
  }
};
