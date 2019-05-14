import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';

const styles = theme => ({
  button: {
    display: 'inline-block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    height: 0,
    margin: theme.spacing.unit,
    // minWidth: 120,
    display:'inline-block'
  },
  root:{
    height:0,
    width:0
  },
  selectMenu:{
    // display:'none'
    'min-height': '0px!important',
    width:0,
    height:0
  },
  ulPos:{
    top:'121px!important'
  }
});

class ControlledOpenSelect extends React.Component {
  state = {
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes,Subject } = this.props;
    
    return (
      <form style={{display:'inline-block'}} autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button>
        <FormControl  className={classes.formControl}>
          {/* <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel> */}
          <Select 
          className={classes.root}
            classes={{
              selectMenu:classes.selectMenu,
            }}
            IconComponent={() => <Person style={{display:'none'}} />}
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            {Subject.map((option,index) => (
            <MenuItem
             key={option} value={option}>
              {option}
            </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
