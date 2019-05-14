import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col
} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment , faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
// import ModalComment from './ModalComments'
import Input from './InputFullWidth'
import Button from './Button'

const styles = theme => ({
    
   
    imgSize:
    {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        position:'relative',
        left: '7px'
    },
    inlineName:
    {
        display:'inline-block'
    },
    postMargin:
    {
        marginLeft:'10px'
    },
    
    endLine:{
        borderBottom: "1px solid #e6ecf0"
    },
    timeDot:{
        position: 'relative',
        top: '-3px',
        marginLeft: 5
    },
    dialogCustomizedWidth: {
        'max-width': '95%',
        // 'margin-left':'0px!important',
        // 'margin-right' : '0px!important',
        'margin' : '48px auto!important'
      }
});



class SimpleModal extends React.Component {
    
    render() {
        const { classes } = this.props;
        // const {width} = this.props.viewport;
        // const containSize = width < 426 ? '9' : '10'
        // const iconCol = width < 426 ? '4' : '3'
        // const modalSize = width < 426 ? { paperFullWidth: classes.dialogCustomizedWidth } : {}
        return (
            <div>
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            scroll='body'
            fullWidth
            // classes={modalSize}
            // maxWidth = {'xs'}
            >
            <DialogContent>

            {/* <Container> */}
                {this.props.children}
            {/* </Container> */}
            </DialogContent>

            </Dialog>
            </div>
            );
        }
    }
    
    SimpleModal.propTypes = {
        classes: PropTypes.object.isRequired,
    };
    SimpleModal.defaultProps = { comments:[] }
    
    
    export default withStyles(styles)(SimpleModal)
    