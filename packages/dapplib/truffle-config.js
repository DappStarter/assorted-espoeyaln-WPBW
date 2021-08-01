require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remain purpose idea kite furnace seek'; 
let testAccounts = [
"0x6d86d6208bbb1b0e327a50df5f1b9c43221e39642209a62f66b75db2808f2f56",
"0x2e2e8160961dcc4f6da39c84ec84a523df6d7f14be415a26cd7917463433bdb6",
"0x8aed444d14fec350a4fa82c38cbea4cc50813c3dc1e971e03800eb2c83a80097",
"0x147bc7ef1e085d6399bab29eb882edef4e636497cca558fc5265d51ebedb99f8",
"0x5d9f0fdff4d4daa3ef7b116663e3d036ce5a6776ced874c1f81f6d1b7fed3484",
"0xdce778787f6348204a000ad6b02bd5d73f0360bf3bca60688963003870635857",
"0x8538905375b765ee029ed182cbd2539f35aed4ca27409bc1951d6f644a820f02",
"0x0e739c54f77ba4e2824f7e635a64a50618299fbd5ec84057a3f967f4033da0c7",
"0x45b82007582095a6b0041e47a25af43f6333fa812e751158773733c5706d9582",
"0x3cf236c780885b897edd2d3d7aff79cffa475e8ff74292d849bdf80423b7806a"
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

