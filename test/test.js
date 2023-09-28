const test = require('tape')
const zcash = require('../index')

test('generateTransparentTransaction', function (t) {
  const wif = 'KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn'
  const utxos = [{
    'txId': '115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986',
    'outputIndex': 0,
    'address': 't1VLyEX9gpXZdZeVXeuAvqPRPxj8u8qiVHL',
    'script': '76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac',
    'satoshis': 50000
  }]

  const mainnetTransaction = zcash.generateTransparentTransaction(wif, utxos, 't1VLyEX9gpXZdZeVXeuAvqPRPxj8u8qiVHL', 1500, 'mainnet').toString()
  console.log(mainnetTransaction)
  t.end()
})
