
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root:{
    minWidth:'18px'
  },
  input: {
    display: 'none',
  },
  buttonMargin: {
    marginTop: '25px'
  }
});


class ContainedButtons extends React.Component {
  onClick = () => {
    console.log('button===>', this.props.isSendUid)
    this.props.onClick(this.props.isSendUid)
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.address)
    return (
      !this.props.isSendUid ? <Button variant="contained" style={this.props.style} type={this.props.buttonType} size='large' disabled={this.props.isDisabled} color="primary" onClick={() => this.props.onClick(this.props.address)} className={[classes.button,classes.root]}>
        {this.props.text}
      </Button> : <Button variant="contained" style={this.props.style} type={this.props.buttonType} size='large' disabled={this.props.isDisabled} color="primary" onClick={() => this.onClick()} className={[classes.button, classes.root]}>
          {this.props.text}
        </Button>
    );
  }
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
ContainedButtons.defaultProps = {
  isDisabled: false,
  buttonType: '',
  isSendUid: ''
}


export default withStyles(styles)(ContainedButtons);
