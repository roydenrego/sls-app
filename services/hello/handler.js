'use strict';

const Test = require('../../core/test');

module.exports.app = async event => {
  let test = new Test();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless v1.0! Your function ${test.test1} executed successfully!`
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};