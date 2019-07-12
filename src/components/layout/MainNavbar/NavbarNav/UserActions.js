import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { LoginConsumer } from "../../../../config/contextConfig.js";
import * as firebase from "firebase";
import { logout } from '../../../../config/firebase'

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      name:''
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  isLogin = (ev) => {
    logout(ev);
    // this.props.history.push('/login')
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount(){
    let uid = sessionStorage.getItem('uid')
    firebase.database().ref('users').child(uid)
    .once('value',data=>{
      let userData = data.val();
      this.setState({name:userData.name})
    })
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/5.png")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{this.state.name}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          {/* <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider /> */}
          <LoginConsumer>{({ isLogin, login }) => {
            return <DropdownItem tag={Link} to='/' onClick={() => { this.isLogin(isLogin) }} className="text-danger">
              <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
          }}
          </LoginConsumer>
        </Collapse>
      </NavItem>
    );
  }
}
