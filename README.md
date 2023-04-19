# Graph API Token Manager
Graph API Token Manager is a Node.js package that provides functionality to manage Facebook Graph API tokens. It can be used to exchange a code for an access token and to exchange a short-lived access token for a long-lived access token.

## Installation
You can install the package using npm:

```bash
npm install graph-api-token-manager
```

## Usage
First, create a new instance of the TokenManager class:

```javascript
const TokenManager = require('graph-api-token-manager');
const tokenManager = new TokenManager();
```

Exchanging a code for an access token
To exchange a code for an access token, use the exchangeCodeForAccessToken method:

```javascript
const code = 'your_obtained_code';
const longLivedAccessToken = await tokenManager.exchangeCodeForAccessToken(code);
console.log(`Long-lived access token: ${longLivedAccessToken}`);
```

Exchanging a short-lived access token for a long-lived access token
To exchange a short-lived access token for a long-lived access token, use the exchangeShortLivedForLongLivedAccessToken method:

```javascript
const shortLivedAccessToken = 'your_short_lived_access_token';
const longLivedAccessToken = await tokenManager.exchangeShortLivedForLongLivedAccessToken(shortLivedAccessToken);
console.log(`Long-lived access token: ${longLivedAccessToken}`);
```

## Example
Here is an example of how to use the package:

```javascript
const TokenManager = require('graph-api-token-manager');

(async () => {
  try {
    const tokenManager = new TokenManager();

    // Exchange a code for an access token
    const code = 'your_obtained_code';
    const longLivedAccessToken = await tokenManager.exchangeCodeForAccessToken(code);
    console.log(`Long-lived access token: ${longLivedAccessToken}`);

    // Exchange a short-lived access token for a long-lived access token
    const shortLivedAccessToken = 'your_short_lived_access_token';
    const longLivedAccessToken2 = await tokenManager.exchangeShortLivedForLongLivedAccessToken(shortLivedAccessToken);
    console.log(`Long-lived access token: ${longLivedAccessToken2}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
```

## Configuration
The package requires the following environment variables to be set:

```
APP_ID: Your Facebook app ID.
APP_SECRET: Your Facebook app secret.
REDIRECT_URI: The URI that Facebook should redirect to after the user authorizes your app.
Copy the .env.example file to .env and set the values appropriately:
```

```bash
cp .env.example .env
```

## License
This package is licensed under the MIT License.