import React,{Component} from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import {LoginProvider} from './config/contextConfig';
import routes from "./routes";
import withTracker from "./withTracker";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { getTokenBalance, getAccountAddress} from './utils/blockchainFunctions'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      login: JSON.parse(sessionStorage.getItem('user'))  || false,
      uid: sessionStorage.getItem('uid') || '' ,
      isLogin: this.isLogin,
      // gotUid: JSON.parse(sessionStorage.getItem('uidGot')) !== false ? true : false,
      // gotUidFn: this.gotUidFn,
      isBalanceUpdate : false,
      updateBalance: this.updateBalance
    };
  }

  updateBalance = () => {
    this.setState(state => ({
      isBalanceUpdate: !state.isBalanceUpdate
    }));
  }
  
  isLogin = () => {
    if(this.state.login)  {
      sessionStorage.setItem('user',false)
      sessionStorage.setItem('uidGot',true)
      this.setState({gotUid:true,uid:''})
    }
    else {sessionStorage.setItem('user',true)}
    this.setState(state => ({
      login : !state.login
    }));
    console.log('app.js ===>',this.state.login)
  };

  // gotUidFn = (uid) => {
  //   this.setState({uid,gotUid:false})
  //   sessionStorage.setItem('uidGot',false)
  //   sessionStorage.setItem('uid',uid)
  // }
  
  componentDidMount(){
    getTokenBalance();
    getAccountAddress()
  }

  render(){
    console.log(this.state)
  return (
    <LoginProvider value={this.state}> 
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {
          (this.state.login) ? (
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={withTracker(props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  })}
                /> 
              );
            })
          ) : (
            <>
                {/* <Route exact path="/" component={Login}/>    */}
                <Route exact path="/" component={Login}/>   
                <Route  path="/login" component={Login}/>   
                <Route  path="/signup" component={Signup}/>   
                <Route path='/addData' component = {() => <Redirect to="/login" />}/>
               
            </>
          )
        }
       
      </div> 
    </Router>
    </LoginProvider> 
)
}

}

