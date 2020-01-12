'use strict';

const Test = require('../../core/test');
const request = require('request');

module.exports.app = async event => {
  let test = new Test();

  const body = JSON.parse(event.body);

  let promise = new Promise((resolve, reject) => {
    request({ url: `https://reqres.in/api/users?page=${body.page}`, json: true }, (err, res, body) => {
      if (err) {
        reject(err);
      }

      resolve(body);
    });
  });

  let result = await promise;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${test.test2()}!`,
        result
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};