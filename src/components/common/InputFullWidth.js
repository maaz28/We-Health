import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';


  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });

  
  class OutlinedTextFields extends React.Component {

        constructor(){
            super();
            this.state={
                lines:'1'
            }
        }


       

      render(){
        const { classes } = this.props;
        const {lines} = this.state;
        console.log(this.props)
        // console.log(this.props.updateComment)
        return(
          <MuiThemeProvider theme={theme}>
        <TextField
        id="outlined-full-width"
        style={{ marginBottom: 10 }}
        label={this.props.label}
        name={this.props.name}
        fullWidth
        // multiline
        value={this.props.value}
        // rows={lines}
        margin="normal"
        variant="outlined"
        onChange={(e)=>this.props.onChange(e)}
      />
      </MuiThemeProvider>
        )

      }
  }

  // OutlinedTextFields.propTypes = {
  //   classes: PropTypes.object.isRequired,
  // };
  
  export default OutlinedTextFields;