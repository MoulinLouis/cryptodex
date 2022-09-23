# Cryptodex - CLI
![Preview CLI](https://image.noelshack.com/fichiers/2022/38/5/1663945230-preview.png)
## How to use
```
git clone https://github.com/MoulinLouis/cryptodex.git
cd cryptodex && npm install && npm link
```

## Features

### General
1. Command Line Interface
2. Handle API key with https://nomics.com
3. Check cryptocurrency price

### Commands
```
// set your API key
cryptodex key set

// show your current API key
cryptodex key show

// remove your current API key
cryptodex key remove

/*
 * check the cryptocurrency price
 * optionnal : --coin=BTC,ETH,BNB 
 * (default = BTC,ETH,BNB,XRP,ADA)
 *
 * optionnal : --cur=EUR
 * (default = USD)
 *
*/
cryptodex check price
```

## Todo-list
1. WIP

## Contributors
* **Louis Moulin** - [MoulinLouis](https://github.com/MoulinLouis)