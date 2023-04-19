const axios = require('axios');
require('dotenv').config();

class TokenManager {
  async exchangeCodeForAccessToken(code) {
    try {
      const response = await axios.post(`https://graph.facebook.com/v12.0/oauth/access_token`, null, {
        params: {
          client_id: process.env.APP_ID,
          redirect_uri: process.env.REDIRECT_URI,
          client_secret: process.env.APP_SECRET,
          code: code
        }
      });

      const shortLivedAccessToken = response.data.access_token;
      return await this.exchangeShortLivedForLongLivedAccessToken(shortLivedAccessToken);
    } catch (error) {
      throw new Error(`Error exchanging code for access token: ${error.message}`);
    }
  }

  async exchangeShortLivedForLongLivedAccessToken(shortLivedAccessToken) {
    try {
      const response = await axios.get(`https://graph.facebook.com/v12.0/oauth/access_token`, {
        params: {
          grant_type: 'fb_exchange_token',
          client_id: process.env.APP_ID,
          client_secret: process.env.APP_SECRET,
          fb_exchange_token: shortLivedAccessToken
        }
      });

      return response.data.access_token;
    } catch (error) {
      throw new Error(`Error exchanging short-lived access token for long-lived access token: ${error.message}`);
    }
  }

  
}

module.exports = TokenManager;
