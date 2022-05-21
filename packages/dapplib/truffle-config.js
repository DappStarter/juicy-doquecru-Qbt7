require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stone dash shift protect gloom neck equal gasp'; 
let testAccounts = [
"0xa754e5ac963bd61538a37995625d8b850acbda2d8fa32d3f91b2785b1c80265b",
"0xe8dbdc5871b00620172716bbc2c542a4ce2d0e6ac13251ab41cdba5526bd321b",
"0xf880fdcfe11f18a2798fd087c86176514273eed7165266f68fba569134bbbd4f",
"0xd3f7228225073822be888885a6355cedf045c0d74ce2ed9b9db424d7f14c1818",
"0xd03e6daeaf8fdae4015f9d4fb15b5889d4ffe76a9eccb4302e4e4cee9d2e7de9",
"0x3d1962793d6e7f5ee0e81ff462ebc2dcd91ca3f40268c936583b9f262f833736",
"0x7fdd70bd293be3c8a6cef98ceaeb8d9374638237bda1ecf91edcc6444623b8d9",
"0xc74c594557d55e824e0eac211183bb7f8daf6ffbbcc1897bf127db1e209d96dd",
"0x1540bcea5635be94b17785bf61a1e9f8eba022e678298b8c298124cefcbca3df",
"0x419a3421c37eed9d1cca1736a24e7681a19816c7325a48d464b1546d33465f73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

