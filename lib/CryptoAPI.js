const axios = require('axios');
const colors = require('colors');
const { formatCoinCheck } = require('../utils/format');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOpt, curOpt) {
    try {
        const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`);

        return formatCoinCheck(res.data, curOpt);
    } catch (err) {
        handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
    if (err.response.status === 401) {
        throw new Error('Oops! Your API key is invalid - Go to https://nomics.com');
    } else if (err.response.status === 404) {
        throw new Error('Oops! Your API is not responding');
    } else {
        throw new Error('Oops! Something went wrong');
    }
}

module.exports = CryptoAPI;