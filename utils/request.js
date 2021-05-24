const request = require("request");
const component = "DW.requestUtil";

module.exports.makeCall = (params) => {
  return new Promise((resolve, reject) => {
    try {
      request(params.url, (error, res, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    } catch (ex) {
      console.log(component, null, JSON.stringify(ex));
      reject(ex);
    }
  });
};
