import React, { Component } from 'react';
import Post from '../Post/Post';
import './MainPage.css'
import uploadImage from '../../images/upload.png';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[]
         }
    }
    componentDidMount(){
        this.getPost();

    }
    getPost=()=>{
        let data=[
            {
                "postId":"123456",
                "username":"shubham_saorav",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "likes":"1234" 
            },
            {
                "postId":"123456",
                "username":"shubham_saorav",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "likes":"1234" 
            },
        ]
        this.setState({postArray:data})
    }
    render() { 
        return (
             <div> 
                 <div style={{"textAlign":"center","margin":"10px"}}>
                     <img  className='mainpage_uploadicon' src={uploadImage}/>
                 </div>
                 {
                     this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} username={item.username} postimage={item.postImageURL} likes={item.likes}/>
            

                     ))

                     
                 }
            <Post id="1234" username="Shubham_saorav" postimage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="1234"/>
            

        </div> 
        );
    }
}
 
export default MainPage;