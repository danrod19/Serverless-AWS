"use strict";
const AWS = require("aws-sdk");

const UpdatItem = async (event) => {

    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters

    await DynamoDB.update({
            TableName: "ItemTableNew",
            Key: {id},
            UpdateExpression: 'set itemStatus = :itemStatus',
            ExpressionAttributeValues: {
                ':itemStatus': itemStatus
            },
            ReturnValues: "ALL_NEW"
        }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(
            {MSG: 'Item updated'}
        ),
    };
}

module.exports = {
    handler: updatetime,
};