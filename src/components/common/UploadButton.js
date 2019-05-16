import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})

    
    
class ContainedButtons extends React.Component {
    constructor(){
        super();
        this.state={}
        this.upload = React.createRef()
    }

    handleChange = (e) => {
        console.log(this.upload.current.files[0])
        e.preventDefault()
    }

    render(){

        const { classes } = this.props;
        return (
            <form onSubmit={this.handleChange} >
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            ref={this.upload}
            />
            <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" className={classes.button}>
            {this.props.text}
            </Button>
            </label>
            </form>
            );
        }
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);