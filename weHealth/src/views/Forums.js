import React, { Component } from 'react';
import { Container,Row,Col } from "shards-react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import PageTitle from "../components/common/PageTitle";
import Select from '../components/common/Select'
import ButtonSelect from '../components/common/ButtonDrop'
import ForumsView from './ForumView'
import Repost from './InnerPost';
import Modal from './ForumModal';
import Button from '../components/common/Button'


const style = theme => ({
  imgSpacing:{
    marginTop: '20px',
    marginLeft: '15px',
    padding:0
  },
})

class Forums extends Component {
  
  constructor(){
    super();
    this.state={
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
      data:[
        {
          postId: '1',
          topic: 'English',
          ownerPic: require("../images/avatars/0.jpg"),
          ownerName: 'Sara Carole',
          timeStamp: '14h',
          ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
          isRepost: {
            RepostPic: require("../images/content-management/2.jpeg"),
            RepostName: 'Ray Jackon',
            RepostDesc: `Using real content during design can distract designers and design review teams alike away from the design, and insisting on always using publication-ready content can be a real drag on the design process.`
          },
          isImg: false,
          likes: 9,
          comments_count: 4,
          comments: [
            {
              commentId: '1',
              ownerPic: require("../images/avatars/1.jpg"),
              ownerName: 'John James',
              timeStamp: '1h',
              ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
              likes: 1,
              comments_count: 3
            },
            {
              commentId: '2',
              ownerPic: require("../images/avatars/2.jpg"),
              ownerName: 'Michel James',
              timeStamp: '4h',
              ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
              likes: 0,
              comments_count: 0
            },
            {
              commentId: '3',
              ownerPic: require("../images/avatars/2.jpg"),
              ownerName: 'Michel James',
              timeStamp: '4h',
              ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
              likes: 0,
              comments_count: 0
            },
            {
              commentId: '4',
              ownerPic: require("../images/avatars/2.jpg"),
              ownerName: 'Michel James',
              timeStamp: '4h',
              ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
              likes: 0,
              comments_count: 0
            },
          ]
        },
        {
          postId: '2',
          topic: 'Chemistry',
          ownerPic: require("../images/avatars/1.jpg"),
          ownerName: 'John James',
          timeStamp: '1h',
          ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
          isRepost: false,
          isImg: require("../images/content-management/3.jpeg"),
          likes: 2,
          comments_count: 6
        },
        {
          postId: '3',
          topic: 'Chemistry',
          ownerPic: require("../images/avatars/2.jpg"),
          ownerName: 'Michel James',
          timeStamp: '24 April 19',
          ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
          isRepost: false,
          isImg: false,
          likes: 9,
          comments_count: 4
        },
        {
          postId: '4',
          topic: 'Computer',
          ownerPic: require("../images/avatars/3.jpg"),
          ownerName: 'Brandon Simmons',
          timeStamp: '23h',
          ownerDesc: 'Many modern alternatives often incorporate humor or other content that actually detracts from the primary purpose of filler text: to be unobtrusive, yet provide the feel, look, and texture of filler text.',
          isRepost: {
            RepostPic: require("../images/content-management/7.jpeg"),
            RepostName: 'Harry Jack',
            RepostDesc: `Using real content during design can distract designers and design review teams alike away from the design, and insisting on always using publication-ready content can be a real drag on the design process.`
          },
          isImg: false,
          likes: 12,
          comments_count: 5
        },
        
      ],
      open : false,
      modalData:{},
      text:'',
      topicToSearch:'All Topics',
      isSearch: false,
      searchData: []
    }
    
  }
  
  searchValue = (val) => {
    const {data} = this.state;
    console.log('target ===>',val)
    const topicToSearch = val ;
    if(topicToSearch!=='All Topics'){
      this.setState({topicToSearch,isSearch:false})
      const searchData = data.filter(item => item.topic===topicToSearch)
      this.setState({searchData,isSearch:true})
    }
    else{
      this.setState({topicToSearch,isSearch:false,searchData:[]})
    }
  }
  
  search = () => {
    
  }
  
  upadteComment = (val) => {
    const text = val;
    this.setState({text})
  }
  
  submitComment = () => {
    const {data,modalData,text} = this.state;
    const userComment = {
      commentId: modalData.length+1,
      ownerPic: modalData.ownerPic,
      ownerName: modalData.ownerName,
      timeStamp: '0m',
      ownerDesc: text,
      likes: 0,
      comments_count: 0
    }
    modalData.comments.push(userComment)
    let editedData = data.map((item,index)=>{
      if(item.postId===modalData.postId){
        return modalData
      }
      return item
    })
    this.setState({
      data:editedData,
      text:''
    })
  }
  
  updateModal = (data) => {
    this.setState({modalData:data})
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };
  
  componentDidMount(){
    window.addEventListener('resize', this._resize_mixin_callback);
  }
  
  _resize_mixin_callback = () => {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this._resize_mixin_callback);
  }
  
  render() {
    const {classes} = this.props;
    const {data,viewport,open,modalData,text,topicToSearch,searchData,isSearch} = this.state;
    const list = topicToSearch && searchData.length>0 ? searchData : data
    const btnAlign = viewport.width < 991 ? {textAlign:'right'} : {}
    const topicsArray = ['All Topics','English','Urdu','Physics','Maths','Chemistry','Computer'];
    return (
      <>
      <Modal 
      modalData={modalData} 
      comments={modalData.comments} 
      viewport={viewport} 
      open={open} 
      text={text}
      handleClose={this.handleClose}
      upadteComment={this.upadteComment}
      submitComment={this.submitComment}
      >
      {modalData.isRepost && <Repost data={modalData.isRepost} viewport={viewport} />}
      {modalData.isImg && 
        <Col lg='11' className={classes.imgSpacing} >
        <img src={modalData.isImg} style={{width:'100%',borderRadius:'10px'}} />
        </Col>
      }
      </Modal>
      <Container fluid style={{marginBottom:20}} >
        <Row noGutters className="page-header py-4">
          <Col lg="5" md="5" sm="12" className="mb-4">
            <PageTitle sm="12" title="Forum" subtitle="Components" className="text-sm-left" />
          </Col>
          <Col lg="7" md="7" sm="12" style={{textAlign:'right'}} className="mb-4">
            {/* <Select Subject={topicsArray} value={this.state.topicToSearch} searchValue={this.searchValue} />         */}
            <span><em>Sorted By:</em></span>
            <ButtonSelect Subject={topicsArray} onClick={this.searchValue} value={topicToSearch} />
          </Col>
        </Row>
        <Row>
        {/* <Col style={btnAlign} lg='3'>
        <Button viewport={viewport} onClick={this.search} isForum={true} text="search" />
        </Col> */}
          { topicToSearch && isSearch && searchData.length===0 && <Col>
            <Typography style={{padding:'10px'}} variant='subtitle2' >
            No Disscusions related to {topicToSearch}
            </Typography></Col>}
        </Row>
        <Row>
          {
            list.map(item=>{
              return(
                <>
                <ForumsView key={item.postId} data={item} updateModal={this.updateModal} onClick={this.handleOpen} viewport={viewport} >
                {item.isRepost && <Repost data={item.isRepost} viewport={viewport} />}
                {item.isImg && 
                  <Col lg='11' className={classes.imgSpacing} >
                  <img src={item.isImg} style={{width:'100%',borderRadius:'10px'}} />
                  </Col>
                }
                </ForumsView>
                </>
                )
              })
            }
            
        </Row>
      </Container>
    </>
  )
}
}
      
Forums.propTypes = {
  classes: PropTypes.object.isRequired,
};
      
export default withStyles(style)(Forums)