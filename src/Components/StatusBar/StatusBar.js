// import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './StatusBar.css'
import Avatar  from '@material-ui/core/Avatar';
import statusimg from "../../images/pp1.png";
import uploadimage from "../../images/statusadd.png";
import { ListItem } from '@material-ui/core';
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList:[]
         }
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        let data=[
            {
                "username":"Sanjay_Sahu",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Shubham_Saorav",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Gaurav",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Pritam",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Shubham_Singh",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Puja_Priya",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Puja_Priya",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Puja_Priya",
                "imgURL":"../../images/pp1.png"
            },
            {
                "username":"Puja_Priya",
                "imgURL":"../../images/pp1.png"
            },
        ]
        this.setState({statusList:data})

    }
    render() { 
        return ( 
            <div> 
                <div className="statusbar_container">
                    <img src={uploadimage} className="statusbar_upload" width="55px" height="55px"/>
                    {
                        this.state.statusList.map((item,index)=>(
                    
                    <div className="status">
                        <Avatar  className='statusbar_status' src={statusimg}/>
                        <div className='statusbar_text'>{item.username}</div>
                    </div>
                        ))
                        }
                   
                </div>

            </div>
         );
    }
}
 
export default StatusBar;