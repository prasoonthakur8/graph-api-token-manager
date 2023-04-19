const TokenManager = require('./lib/token-manager');

(async () => {
  try {
    const tokenManager = new TokenManager();
    const code = 'your_obtained_code';
    const longLivedAccessToken = await tokenManager.exchangeCodeForAccessToken(code);
    console.log(`Long-lived access token: ${longLivedAccessToken}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
