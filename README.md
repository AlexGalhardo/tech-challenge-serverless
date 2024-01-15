# Tech Challenge Serverless

https://github.com/AlexGalhardo/tech-challenge-serverless/assets/19540357/2d15e1fa-c025-447a-b101-ae284354e799

## DNS Production: https://eluwv4q4ag.execute-api.us-east-1.amazonaws.com

## Technologies
- [NodeJS v20](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS](https://aws.amazon.com/)
   - [Lambda](https://aws.amazon.com/lambda/)
   - [DynamoDB](https://aws.amazon.com/dynamodb/)
   - [API Gateway](https://aws.amazon.com/api-gateway/)

## Settings needed to run this project
- See documentation: [docs/settings-to-run-this-project](./docs/settings-to-run-this-project.md)

## Setup

1. Clone this repository
```bash
git clone git@github.com:AlexGalhardo/tech-challenge-serverless.git
```

2. Enter repository
```bash
cd tech-challenge-serverless/
```

3. Install dependencies
```bash
npm install
```

4. Login to your Serverless Account
```bash
sls login
```

5.  Deploy to AWS
```bash
sls deploy
```

6. See video demo above for other necessary steps

## API Documentation
- You can use the HTTP Requests inside [rest-client/](./rest-client/) folder using the VSCode extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

- ### Using cURL
   - Create User
	```bash
	curl -X POST -H "Content-Type:application/json" https://eluwv4q4ag.execute-api.us-east-1.amazonaws.com/user --data '{
		"name": "alex galhardo",
		"email": "aleexgvieira@gmail.com",
		"password": "qwe123BR@123qwe123"
	}'
	```
   - Get User By Id
   ```bash
   curl https://eluwv4q4ag.execute-api.us-east-1.amazonaws.com/user/a9c2e30b-1508-4613-ac1e-74fe1afdcb11
   ```
   - Increment Site Access
	```bash
	curl -X POST -H "Content-Type:application/json" https://eluwv4q4ag.execute-api.us-east-1.amazonaws.com/increment/site-access
	```
   - Get Total Site Access
   ```bash
   curl https://eluwv4q4ag.execute-api.us-east-1.amazonaws.com/total/site-access
   ```

## General Documentation
- You can see and add important documentation about this code repository in the [docs/](./docs/) folder

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) January 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
