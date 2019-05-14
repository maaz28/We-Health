import React from 'react';
import {Row,Col} from "shards-react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const style = theme => ({
    rePostMargin:
    {
        border: '1px solid lightGrey',
        borderRadius: '10px',
        marginTop: '20px',
        marginLeft: '15px',
        padding: '0px',
        padding: '15px'
    },
    rePostImg:
    {
        borderRadius:'10px',
        width:'100%',
        height: '100%'
    },
    inlineName:
    {
        display:'inline-block'
    }
})

class InnerPost extends React.Component {

    render(){
        const { classes } = this.props;
        const {RepostPic,RepostName,RepostDesc} = this.props.data;
        const {width} = this.props.viewport;
        const descToShow = RepostDesc.length > 100 ? RepostDesc.slice(0,100)+'... Read More' : RepostDesc
        let picstyle;
        let colStyle;
        let colSize;
        if (width < 426) {
            picstyle = '12';
            colStyle = {marginTop: '15px'}
            colSize = '12'
        }
          else {
            picstyle = '3'
            colStyle = {padding:0}
            colSize = '9'
        }

        return(
            <Col lg='11' className={classes.rePostMargin} >
                <Row>
                    <Col lg='3' xs={picstyle} >
                        <img className={classes.rePostImg} src={RepostPic} />
                    </Col>
                    <Col lg="9" xs={colSize} style={colStyle} >
                        <Typography className={classes.inlineName} variant='title' >{RepostName}</Typography>                        
                        <Typography style={{width: 'calc(100% - 20px)'}} >{descToShow}</Typography>
                    </Col>
                </Row>
            </Col>
            )
    }
    
}

InnerPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(InnerPost)