<div align="center">
  	<h1 align="center">Tech Challenge Serverless</h1>
</div>

## Introduction
- Tech challenge to do a simple API using serverless framework, using these technologies:
- [NodeJS v20](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS](https://aws.amazon.com/)
   - [Lambda](https://aws.amazon.com/lambda/)
   - [DynamoDB](https://aws.amazon.com/dynamodb/)
   - [API Gateway](https://aws.amazon.com/api-gateway/)

## Prerequisites
- See documentation: [docs/settings-to-run-this-project](./docs/settings-to-run-this-project.md)

## Local Developent Setup

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

4. Don't forget to setup your AWS credentials locally (prerequisites) to be able to access DynamoDB in AWS
- Example in MacOS terminal:
```bash
export AWS_ACCESS_KEY_ID=YOU_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=YOUR_AWS_ACCESS_KEY_ID
```

5. Up server locally
```bash
npm run dev
```

## Deploying to AWS

a. Login to your Serverless Account
```bash
sls login
```

b. In `https://app.serverless.com/your_user_name/settings/providers`
   - a. Click button at end right: `+ Create Provider`
   - b. Give a **name to your org provider**, like: `alexgalhardo` for example
   - c. Click button: `Connect AWS Provider`
   - You are gonna be redirect to your AWS Console
   - Confirm clicking button: `Create Stack`
   - When is finished, your page: `https://app.serverless.com/your_user_name/settings/providers` will be updated

c. In `https://app.serverless.com/your_user_name/apps`
   - a. Click on "Create App"
   - b. Give your **app name**, like: `serverless-dynamodb-api` for example
   - c. Created your app, click on "crete service" and give your **service name**, like: `serverless-dynamodb-api` for example
   - d. Paste the org, app and service name into serverless.yml

d. Run command
```bash
sls deploy
```

## Remove Deploy from AWS
```bash
sls remove
```

## API Requests
- You can use the HTTP Requests inside [rest-client/](./rest-client/) folder using the VSCode extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Docs
- You can see and add important documentation about this code repository in the [docs/](./docs/) folder

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) March 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
