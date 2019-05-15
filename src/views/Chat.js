import React,{Component} from 'react'
import { Container,Row,Col } from "shards-react";
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import PageTitle from "../components/common/PageTitle";
import Input from '../components/common/UnderlineTextField'
import Recieved from './Recieved'
import Reply from './Reply'

const styles = theme => ({
    msgContain:{
        backgroundColor:'#e9ecef',
        'max-height':'76.2vh',
        height:'76.2vh',
    }
})

class Chat extends Component{
    constructor(){
        super();
        this.state={
            msgs: [
                {
                    msg: 'Hi, how can i help?',
                    type: 'recieved'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: 'How are you?',
                    type: 'reply'
                },
                {
                    msg: "i am fine.",
                    type: 'recieved'
                },
                {
                    msg: "i am fine.",
                    type: 'recieved'
                }
            ],
            msgInput: '',
        }
    }

    handleChange = (val) => {
        const msgInput = val.target.value;
        this.setState({msgInput})
    }

    addToMsg = () => {
        const {msgInput,msgs} = this.state;
        const userMsg = {
            msg: msgInput,
            type: 'reply'
        }
        msgs.push(userMsg)
        this.setState({msgs,msgInput:''})
    }

    render(){
        const {msgs} = this.state;
        const {classes} = this.props;
        return(
            <>
            <Scrollbars 
            universal
            autoHide 
            autoHideTimeout={1000} 
            autoHideDuration={200} 
            style={{height:'82vh',width:'100%',marginBottom:'1vh'}} 
            >
                <Container fluid >
                    <Row noGutters className="page-header py-4">
                        <PageTitle sm="4" title="Chat" subtitle="Components" className="text-sm-left" />
                    </Row>
                </Container>
                {msgs.map(item=>{
                    return item.type==='recieved' ? <Recieved data={item} /> : <Reply data={item} />
                })}
            </Scrollbars>
            <div style={{width:'calc(100% - 50px)',display:'inline-block',backgroundColor:'white',paddingTop:'13px'}}>
            <Input onSubmit={this.addToMsg} onChange={this.handleChange} value={this.state.msgInput} placeholder='type Something...' />
            </div>
            <button type='submit' onClick={()=>this.addToMsg()} style={{width:'50px',padding:'12px 0px',border:'none',position:'relative',top:'-5px',left:'-4px',backgroundColor:'#1a7bf7',color:'white'}} ><FontAwesomeIcon icon={ faPaperPlane }/></button>
            </>
            )
        }
    }
    
    Chat.propTypes = {
        classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(Chat)