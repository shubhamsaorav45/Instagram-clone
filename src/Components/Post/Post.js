import React, { Component } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import postimage from "../../images/post.jpg"; 
import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           commentList:[]
         }
    } 
    componentDidMount(){
        this.getComments();
    }
    getComments=()=>{
        let data=[
            {
            "username":"Shubham_Gaurav",
            "commentId":"12345",
            "description":"commment 1"
        },
        {
            "username":"Sanjay_sahu",
            "commentId":"12345",
            "description":"commment 2"
        },
        {
            "username":"Pritam_kumar",
            "commentId":"12345",
            "description":"commment 3"
        },
    ]
    this.setState({commentList:data})

    }

  
    render() { 
        return ( 
        <div className="post__container">
            {/* Header */}
          <div className="post__header">
                <Avatar className="post__image" src={this.state.profileImage} />
                <div className="post__username">{this.props.username}</div>
          </div>

          {/* Image */}
          <div>
              <img src={this.props.postimage} width="615px" /> 
          </div>

          {/* Analytics */}
          <div>
              <div style={{"marginLeft":"10px"}}>
                  <img src={love} className="post_reactimage"/>
                  <img src={comment} className="post_reactimage"/>
                  <img src={share} className="post_reactimage"/>
              </div>
              <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                 {this.props.likes}    
              </div>
          </div>
          

          {/* Comment Section */}
          <div>
              {
                  this.state.commentList.map((item,index)=>(
                      <div className="post_comment">{item.username}:{item.description}</div>

                  ))
              }
              <div className="post_comment">
                
              <input text="text" className="post__commentbox" placeholder="Add a comment..." />
          </div>
          
        </div> 
        </div>
        
        );
    }
}
 
export default Post;