"use-strict";
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const dbClient = new AWS.DynamoDB.DocumentClient();

/*
A function which does batch insertion in dynamo db table
@tableName - Specifies the tableName
@batchItems - Specifies the batch items
*/
const batchInsert = (tableName, batchItems) => {
  return new Promise((resolve, reject) => {
    try {
      let result = {};
      let itemsProcessed = 0;
      batchItems.forEach((item, index) => {
        let RequestItems = {};
        RequestItems[tableName] = item;
        dbClient.batchWrite({ RequestItems }, (err, data) => {
          if (err) {
            console.log("Batch insert unsuccessful ...");
            result.error = JSON.stringify(err);
            reject(result);
          } else {
            itemsProcessed++;
            console.log("Batch insert successful ...");
            result.error = null;
            result.data = data;
            if (itemsProcessed == batchItems.length - 1) {
              resolve(result);
            }
          }
        });
      });
    } catch (ex) {
      result.error = JSON.stringify(ex);
      result.data = null;
      reject(result);
    }
  });
};

/*
A function which gets all the items in dynamo db table
@tableName - A param for the tableName to get all the items
*/
const getAllItems = async (tableName) => {
  try {
    const params = {
      TableName: tableName,
    };
    const scanResults = [];
    let items;
    do {
      items = await dbClient.scan(params).promise();
      items.Items.forEach((item) => scanResults.push(item));
      params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey !== "undefined");

    return scanResults;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
};

/*
A function which gets all the items in dynamo db table
@tableName - A param for the tableName to get all the items
@idName - A param for the idName which specifies the column Name
@idValue - A param for the idValue which specifies the column value 
*/
const getItemById = (tableName, idName, idValue) => {
  return new Promise((resolve, reject) => {
    try {
      let params = {
        TableName: tableName,
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames: {
          "#id": idName,
        },
        ExpressionAttributeValues: {
          ":id": idValue,
        },
      };

      dbClient.query(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to query. Error:",
            JSON.stringify(err, null, 2)
          );
          reject(data.Items);
        } else {
          console.log("Query succeeded.");
          resolve(data.Items);
        }
      });
    } catch (ex) {
      console.log(ex);
      reject(ex);
    }
  });
};

module.exports.db = {
  batchInsert: batchInsert,
  getAllItems: getAllItems,
  getItemById: getItemById,
};
