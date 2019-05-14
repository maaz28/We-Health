 import React, { Component } from 'react';
import YouTube from 'react-youtube';


class VideoThumbnail extends Component {

state = {
  video_url : ""
}

componentWillReceiveProps = (nextProps) => {
  var url = this.youtube_parser(nextProps.video_url)
  this.setState({
    video_url : url
  })
}


youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  render() {
          const opts = {
      height: '210px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
          }
    return (
                                      <YouTube
                                        videoId={this.state.video_url}
                                        opts={opts}
                                    />  
    );
  }
}



export default VideoThumbnail;
