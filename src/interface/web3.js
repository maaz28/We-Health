import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // here we are accesing the metamask provider
    // to access metamask provider we need to pass window.web3.currentProvider in
    // web3 instance
    web3 = new Web3(window.web3.currentProvider);
} else {
    //the people how are not using the metamask
    //they should also able to use this application
    const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/e7cc830da9f546b29a0f80a94a2e8cc6");
    web3 = new Web3(provider);
}

export default web3;
