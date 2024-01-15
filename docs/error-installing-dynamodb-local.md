## Error installing dynamodb local

### Reference: https://github.com/99x/serverless-dynamodb-local/issues/294

- Manually editing the **download_url** in 
   - `node_modules/dynamodb-localhost/dynamodb/config.json`
- To 
   - `https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz` 
- And the import of http to **https** in 
   - `node_modules/dynamodb-localhost/dynamodb/installer.js` 
- Should do the trick