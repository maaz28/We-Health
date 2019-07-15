import React from "react";
import { getTokenBalance } from '../../../../utils/blockchainFunctions'
import { LoginConsumer } from "../../../../config/contextConfig";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: ''
    }
  }

  componentDidMount() {
    getTokenBalance().then((token) => {
      this.setState({
        balance : token
      })
    })
  }

  render() {
    return (
      <>
        <LoginConsumer>{({ isBalanceUpdate }) => {
          if(isBalanceUpdate == true || isBalanceUpdate == false) {
            getTokenBalance().then((token) => {
              this.setState({
                balance: token
              })
            })
          }
        }}</LoginConsumer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '110px', padding: '0px 10px' }}>
          <div style={{ fontWeight: '700' }}>
            Balance: {this.state.balance}
          </div>
        </div>
      </>
    );
  }
}
