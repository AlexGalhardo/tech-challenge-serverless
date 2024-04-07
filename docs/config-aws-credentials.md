## Config AWS Credentials

- 1. Login in to your AWS account
- 2. Search and enter in Identity and Access Management (IAM)
- 3. In the left dashboard, click on "Users"
- 4. Click on the orange button, "Create User"
- 5. Choose a username, and click next
- 6. In the permission options, choose "Attach policies directly"
- 7. Select "AdministratorAccess"
- 8. In Review and create, click in Create User
- 9. After user created, click on the username
- 10. Click on "Security Credentials"
- 11. Click on "Create Access Key"
- 12. Choose "Application running outside AWS" and click next
- 13. You don't need to create a description tag, so click on "Create Access Key"
- 14. Your credentials "Access Key" and "Secret Access Key" will be shown only this time. Copy and save them. You can download a .csv file also. If you loose these credentials, you'll need to create new credentials for this user.
- 15. Copy and paste your credentials, following your operation system below:

### LINUX AND MACOS
```
export AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
```
- a. To Save env variable permanently you can use these commands:
```
nano ~/.bash_profile
```
- b. Save these two lines in this file, save and exit.
- c. Restart terminal


### POWERSHELL
```
$env:AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID"
$env:AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"
```

### CMD WINDOWS
```
SET AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
SET AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
```

- 16. After that, you gonna need to use these credentials in your terminal or save them in the ENV PATH of your operation system.


