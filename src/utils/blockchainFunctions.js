import web3 from '../interface/web3';
import weHealthController from '../interface/weHealthController';

export const getTokenBalance = async () => {
  try {
    const tokenBalance = await weHealthController.methods.getBalance().call();
    console.log(tokenBalance)
  } catch (e) {
    console.log(e);
  }
};

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
