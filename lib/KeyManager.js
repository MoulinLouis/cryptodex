const ConfigStore = require('configstore');
const packageJson = require('../package.json');

class KeyManager {
    constructor() {
        this.config = new ConfigStore(packageJson.name);
    }

    setKey(key) {
        this.config.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.config.get('apiKey');

        if (!key) {
            throw new Error('No API key found - Get a key at https://nomics.com');
        }

        return key;
    }

    deleteKey() {
        const key = this.config.get('apiKey');

        if (!key) {
            throw new Error('No API key found - Get a key at https://nomics.com');
        }

        this.config.delete('apiKey');

        return;
    }

}

module.exports = KeyManager;
