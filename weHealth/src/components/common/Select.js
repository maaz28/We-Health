import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '100%',
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
  

class Select extends React.Component{
    render(){
      const {classes,Subject} = this.props
        return(
            <TextField
            id="outlined-select-currency"
            select
            label="Search"
            className={classes.textField}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText=''
            margin="normal"
            // variant="outlined"
            value={this.props.value}
            onChange={(e)=>this.props.searchValue(e)}
          >
            {Subject.map((option,index) => (

              index===0 ? <MenuItem disabled key={option} value={option}>
                Select Value
              </MenuItem> : <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )
    }
}

Select.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Select);