"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const AWS = require("aws-sdk");

const fetchItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let Item;

    try {
        const result = await dynamodb.get({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise();

        item = result.Item;
    } catch (error) {
        console.log(error)
    }
    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
}

module.exports = {
    handler: fetchItem,
};