import web3 from '../interface/web3';
import weHealthController from '../interface/weHealthController';

export const getTokenBalance = async () => {
  try {
    const tokenBalance = await weHealthController.methods.getBalance().call();
    console.log(tokenBalance.toString())
    return tokenBalance.toString()
  } catch (e) {
    console.log(e);
  }
};

export const getAccountAddress = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    return accounts[0]
  } catch  (e){
    console.log(e)
  }
}

export const buyDataForTokens = async (tokens) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await weHealthController.methods
      .requestData(tokens)
      .send({
        from: accounts[0]
      }).on('transactionHash', (hash) => {
        console.log(hash);
        this.setState({transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash})
      }).on('confirmation', function () {
        // this.setState = ({open : true})
      })
  } catch (e) {
    console.log(e);
  }
};


export const getTokensForData = async (address) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await weHealthController.methods
      .getTokenForData(address)
      .send({
        from: accounts[0]
      }).on('transactionHash', (hash) => {
        console.log(hash);
        this.setState({transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash})
      }).on('confirmation', function () {
        // this.setState = ({open : true})
      })
  } catch (e) {
    console.log(e);
  }
};


export const buyTokens = async (ether) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await weHealthController.methods
      .buyToken().send({
        from: accounts[0],
        value: web3.utils.toWei(ether, 'ether')
      }).on('transactionHash', (hash) => {
        console.log(hash)
        // that.setState({transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash})
      }).on('confirmation', function (confirmationNumber, receipt) {
        console.log(confirmationNumber + ' ' + receipt);
        console.log("Transaction confirmed");
      });
  } catch (e) {
    console.log(e);
  }
};



