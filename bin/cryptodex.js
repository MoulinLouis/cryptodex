#!/usr/bin/env node
const program = require('commander');
const packageJson = require('../package.json');

program
    .version(packageJson.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .command('check', 'Check coin price info')
    .parse(process.argv);

