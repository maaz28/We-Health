import React from "react";
import { getTokenBalance} from '../../../../utils/blockchainFunctions'
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      balance:''
    }
  }

  async componentDidMount(){
    try{
      const balance = await getTokenBalance();
      console.log(balance)
      this.setState({balance})
    }
    catch(e){
      console.log(e)
    }
  }
  
  render() {
    return (
      <>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'110px',padding:'0px 10px'}}>
        <div style={{fontWeight:'700'}} >
            Balance: {this.state.balance}
        </div>  
      </div>
      </>
    );
  }
}
