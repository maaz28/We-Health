import React,{Component} from 'react';
import {
    Container,
    Row,
    Col
} from "shards-react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment , faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const styles = theme=>({
    
    imgSize:
    {
        height: '40px',
        width: '40px',
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
    }
})

class ModalComments extends Component{
    render(){
        const {classes} = this.props;
        const {ownerPic,ownerName,ownerDesc,likes,comments_count,timeStamp} = this.props.comments;
        const {width} = this.props.viewport;
        const containSize = width < 426 ? '9' : '10'
        const iconCol = width < 426 ? '4' : '3'
        return(
            <Row style={{marginTop:'20px'}} >
            <img src={ownerPic} className={classes.imgSize} />
            <Col lg="10" xl='10' xs='10'>
                <Row>
                    <Col lg='12' xs='12' >
                        <Typography className={classes.inlineName} variant='title' >{ownerName}</Typography>
                        <span className={classes.timeDot} >.</span>
                        <span> {timeStamp}</span>                        
                        <Typography  >{ownerDesc}</Typography>
                    </Col>
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
        )
    }
}

ModalComments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalComments)

