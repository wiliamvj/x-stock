# Stock X API

Simple API for stock query

Technologies used:
- Node
- Typescript
- Swagger
- Jest and supertest for tests

Consuming the Marketstack API see more [here](https://marketstack.com/documentation)

## How to run?

- Git clone this repo
- Execute command ```yarn``` or ```npm install```, using npm, I recommend deleting the **yarn.lock** file with the variables, examples:
  - PORT='3001'
  - TOKEN_AUTH='' (token create to JWT)
  - TOKEN_MARKETSTACK='' (token to marketstack)
- Create an **.env** 

## Available commands

- ```yarn dev``` start the server
-  ```yarn test``` start the tests with jest

These commands can be changed in **package.json**



 ###  View the documentation
- access the base url /api-docs ou click [here](https://stock-x-wil.herokuapp.com/api-docs/)

## About the tests
Simple unit tests in the business rules

- I hope the user receives a quote today </br >
**Stock value today**

- I hope the user receives a history quotes </br >
**Share value based on two dates**

- I hope the user receives a gains quotes </br >
**Amount of earnings based on date of purchase and number of shares**

- I hope the user receives a comparison quotes </br >
**Value of stocks for comparison**

- I hope the receive a new user token </br >
**Create a new user token**

