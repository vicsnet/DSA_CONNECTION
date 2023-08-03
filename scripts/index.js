const Web3 = require('web3')
const DSA = require('dsa-connect');
const web3 = new Web3(new Web3.providers.HttpProvider("https://eth.getblock.io/6d0f3028-067a-4e7a-913c-4d7a869ef36c/mainnet/"))


async function test() {
  const dsa = new DSA({
      web3: web3,
      mode: "node",
      privateKey: "16832dee3c008ad52d04fee5b1e242df8a4ffeaeac9a992a0f56a68e8f6472a6"
    },
      1
  );
  
  dsa.build({
      gasPrice: 80000000000, // estimated gas price
      origin: "0x17B332dA07BFF9E03d2f5825C41a823CED54b6Fa",
      authority: "0xA3014F25945ae21119cecbea96056E826B6ae19B",
      version: 2
    })
      
      // const dsaWallets = await dsa.getAccounts(0xA3014F25945ae21119cecbea96056E826B6ae19B)
      // console.log(dsaWallets)

const id = "33620";
      dsa.getAccounts("0xA3014F25945ae21119cecbea96056E826B6ae19B").then(console.log());
      dsa.setInstance(id)
}
test();