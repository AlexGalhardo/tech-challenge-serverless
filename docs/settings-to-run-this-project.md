# Settings needed to run this project

- AWS
  - AWS CLI Installed and Configured
    - https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
    ```bash
    aws configure
    ```
  - To Get AccessKeyId and SecretAccessKey, you can run:
    ```bash
    aws sts get-session-token --serial-number arn:aws:iam::<YOUR_AWS_ACCOUNT_ID_HERE>:mfa/<YOUR_MFA_NAME_HERE> --token-code <YOU_AWS_2FA_AUTH_CODE_HERE>
    ```
  - AWS Security Crendentials, if needed:
    - https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials
  - View AWS Account ID:
    - https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html#ViewYourAWSId

- Serverless
  - Verify if you have made all the necessary settings using the official documentation: https://www.serverless.com/framework/docs/getting-started
  - Config credentials
  ```bash
  sls config credentials --provider aws --key <Access key ID> --secret <Secret access key>
  ```
     - It saves them to: ~/.aws/credentials
