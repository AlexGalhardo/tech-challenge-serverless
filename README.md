# Tech Challenge Serverless

## Technologies
- [NodeJS v20](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS](https://aws.amazon.com/)
   - [Lambda](https://aws.amazon.com/lambda/)
   - [DynamoDB](https://aws.amazon.com/dynamodb/)
   - [API Gateway](https://aws.amazon.com/api-gateway/)

## Local Settings to run this project
- See documentation: [docs/settings-to-run-this-project](./docs/settings-to-run-this-project.md)

## Setup

1. Clone this repository
```bash
git clone https://github.com/AlexGalhardo/refactor-tech-challenge-stone.git
```

2. Enter repository
```bash
cd refactor-tech-challenge-stone/
```

3. Install dependencies
```bash
npm install
```

4. Login to your Serverless Account
```bash
sls login
```

5. In https://app.serverless.com/your_user_name/settings/providers
   - a. Create your AWS Provider to use Access Role ARN

6. In https://app.serverless.com/your_user_name/apps
   - a. Click on "Create App"
   - b. Give your app name
   - c. Created your app, click on "crete service" and give your service name
   - d. Paste the org, app and service name into serverless.yml

7.  Deploy to AWS
```bash
sls deploy
```

## API Documentation
- You can use the HTTP Requests inside [rest-client/](./rest-client/) folder using the VSCode extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## General Documentation
- You can see and add important documentation about this code repository in the [docs/](./docs/) folder

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) March 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
