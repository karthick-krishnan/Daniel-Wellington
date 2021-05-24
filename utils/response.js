"use strict";

const component = "DW.jsonResponse";
/**
 * Response.send JSON response as output
 * @param  {integer} statusCode : of the response
 * @param  {object} err         : error
 * @param  {object} data        : JSON data to be sent in response
 */
module.exports = (statusCode, status, err, data) => {
  let result;
  if (!data || data == "") {
    result = {
      status: status || "FAILED",
      errorMsg: err,
      statusCode: statusCode,
      data: null,
    };
  } else {
    result = {
      status: status || "SUCCESS",
      errorMsg: err,
      statusCode: statusCode,
      data: data,
    };
  }
  return result;
};
