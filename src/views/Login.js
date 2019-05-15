import React, { Component } from "react";
import {validEmail, validPassword} from '../utils/helper.js'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom'
import { Divider } from "@material-ui/core";
import { LoginConsumer } from "../config/contextConfig.js";

const styles = theme => ({
  main: {
    width: 'auto', 
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : "rgba(256,256,256,0.7)",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#F50057',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    backgroundColor : 'black',
    marginTop: theme.spacing.unit * 3,
  },
});


class Login extends Component {
  
  state = {
    email : '',
    password : '',
    loading : false,
    errorPassword : false,
    errorEmail : false,
    error : false,
    errorMessage : '',
  }

  componentWillReceiveProps(next){
    this.setState({
      error : true,
      errorMessage : next.errorMessage
    })
  }

  emailHandler = (ev) =>{
    this.setState({
      email : ev.target.value
    })
  }

  passwordHandler = (ev) => {
    this.setState({
      password : ev.target.value
    })
  }

  emailBlurHandler = (ev) => {
    if(!validEmail(ev.target.value)){
      this.setState({
    errorEmail : true
      })
    }
    else{
      this.setState({
        errorEmail : false
          })
    }
  }
  
  passwordBlurHandler = (ev) => {
    if(!validPassword(ev.target.value)){
      this.setState({
      errorPassword : true
      })
    }
    else{
      this.setState({
        errorPassword : false,
        error : false
          })
    }
  }

  submitBtnHandler = (ev) => {
    // ev.preventDefault();
    let obj = {
      email : this.state.email,
      password : this.state.password
    }
    if((obj.email === "" || obj.password === "" || this.state.errorEmail || this.state.errorPassword)){
      this.setState({
        error : true,
        errorMessage : 'All the fields are required!'
      })
    }
    else {
      this.setState({ 
        error : false
      })
      ev()
      this.props.history.push('/welcome')
      // this.props.submitHandler(obj);
    }
  }


   Handler(){
    this.props.signupHandler();
  }
  
  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar} style = {{backgroundColor : "#00D8EF"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input 
              id="email" 
              name="email" 
              autoComplete="email" 
              autoFocus
              onChange = {this.emailHandler}
              onBlur = {this.emailBlurHandler}
              />
            </FormControl>
            <FormHelperText style = {{color : 'red'}}>{(this.state.errorEmail) ? "Email is not valid" : ""}</FormHelperText>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
              name="password" 
              type="password" 
              id="password" 
              autoComplete="current-password" 
              onChange = {this.passwordHandler}
              onBlur = {this.passwordBlurHandler}
              />
            </FormControl>
            <FormHelperText style = {{color : 'red'}}>{(this.state.errorPassword) ? "Password length should be atleast 6 charaters long" : ""}</FormHelperText>
            {
              (this.state.error) ? (
          <div style = {{margin :'0px', marginTop : '8px', color : 'red'}}>
          <p>{this.state.errorMessage}</p>
          </div>
              ) : null
            }
            <LoginConsumer>{({isLogin, login}) => { 
              return (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {()=>{this.submitBtnHandler(isLogin)}}
            >
              Sign in
            </Button>
            )
          }}</LoginConsumer>
          </form>
          <div style = {{margin :'0px', marginTop : '8px'}}>
          {/* <p>Don't have an account? <a href = "javascript:void(0)" onClick = { () => {this.Handler()}}>Signup</a> here </p>
          <br/> */}
          <Divider/>
          </div>
          <br/>
          <p style = {{fontStyle : "italic"}}>Login into Tehreer.</p>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);