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
import ModalComment from './ModalComments'
import Input from '../components/common/InputFullWidth'
import Button from '../components/common/Button'

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
        const { classes , comments, text } = this.props;
        const {ownerPic,ownerName,timeStamp,ownerDesc,likes,comments_count}=this.props.modalData;
        const {width} = this.props.viewport;
        const containSize = width < 426 ? '9' : '10'
        const iconCol = width < 426 ? '4' : '3'
        const modalSize = width < 426 ? { paperFullWidth: classes.dialogCustomizedWidth } : {}
        return (
            <div>
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            scroll='body'
            fullWidth
            classes={modalSize}
            // maxWidth = {'xs'}
            >
            <DialogContent>

            <Container>
                <Row>
                <img src={ownerPic} className={classes.imgSize} />

                    <Col lg="10" xl='10' xs={containSize}>
                        <Row>
                            <Col lg='12' xs='12' >
                                <Typography className={classes.inlineName} variant='title' >{ownerName}</Typography>
                                <span className={classes.timeDot} >.</span>
                                <span> {timeStamp}</span>                        
                                <Typography  >{ownerDesc}</Typography>
                            </Col>
                                {this.props.children}
                            <Col  xs={iconCol} style={{marginTop:15}} >
                                <FontAwesomeIcon icon={ faComment }/>
                                <span style={{marginLeft:7}} >{likes}</span>
                            </Col>
                            <Col  xs={iconCol} style={{paddingLeft:0,marginTop:15}} >
                                <FontAwesomeIcon icon={ faThumbsUp }/>         
                                <span style={{marginLeft:7}} >{comments_count}</span>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
                <hr />
                <Row>
                <img src={ownerPic} className={classes.imgSize} />
                <Col>
                    <Input value={text} updateComment={(val) => {
                        this.props.upadteComment(val)
                        } } />
                </Col>
                
                </Row>
                <Row>
                <Col style={{textAlign:'right'}} >
                    <Button text='comment' onClick={()=>this.props.submitComment()} />
                </Col>
                </Row>
                {comments.map((item,index)=>{
                    return(
                        <ModalComment key={index} comments={item} viewport={this.props.viewport} />
                    )
                })}
            </Container>
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
    