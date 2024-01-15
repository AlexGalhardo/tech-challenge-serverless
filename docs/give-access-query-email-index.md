## Give Access to query dynamodb to EmailIndex

1. Open the IAM Console.
2. In the left navigation pane, select "Roles."
3. Find and select the role named tech-challenge-stone-dev-lambdaRole (or a similar name).
4. On the "Permissions" tab, locate the role's policy and choose "Attach policies."
5. Add: `"arn:aws:dynamodb:us-east-1:827141524864:table/users-table-dev/index/EmailIndex"`


## Example
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Action": [
				"dynamodb:Query",
				"dynamodb:Scan",
				"dynamodb:GetItem",
				"dynamodb:PutItem"
			],
			"Resource": [
				"arn:aws:dynamodb:us-east-1:827141524864:table/users-table-dev",
				"arn:aws:dynamodb:us-east-1:827141524864:table/users-table-dev/index/EmailIndex"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"dynamodb:Query",
				"dynamodb:Scan",
				"dynamodb:GetItem",
				"dynamodb:PutItem",
				"dynamodb:UpdateItem"
			],
			"Resource": [
				"arn:aws:dynamodb:us-east-1:827141524864:table/site-access-table-dev"
			],
			"Effect": "Allow"
		}
	]
}

```
