import React, { Component } from 'react';
import './App.css';
import {BsClock} from "react-icons/bs";
import {AiOutlineTag} from "react-icons/ai";

    class VideoCard extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                
             };
           
             
        }
        render() {
     return(
         <div className="grid-container">
         <div className="grid-card" onClick={() => console.log('hello')}>
             <img className="video-card" src={require("./images/lake-inniscarra-thumb.jpg")} />
                      
                <span><p className="desc-card">Lake Inniscara,Ireland-  
                <img className="img-thumb" src={require("./images/lake-inniscarra-trainer.jpg")}/>
                <br></br>Pyramid 
                </p>
                
                <p className="duration-View"><BsClock />30:53     <AiOutlineTag />6,248M</p>
                <p  className ="view-details">VIEW DETAILS</p>
             </span>            
         </div>
          <div className="grid-card">
             <img className="video-card" src={require("./images/performance-series-thumb.jpg")} />
             <div className="playlist">
                 <p style={{fontWeight:'bolder'}}>9</p>
                 <p style={{fontSize:10}}> WORKOUTS</p>
                 <span class="material-icons">playlist_play</span>
             </div>
                <span>
                <p className="desc-card">Performance Series
                <img className="img-thumb" src={require("./images/performance-series-trainer.jpg")}/>
                </p>
             </span>     
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/slow-pulls-thumb.jpg")} />
             
                <span><p className="desc-card">Slow Pulls and Fast 
                <img className="img-thumb" src={require("./images/slow-pulls-trainer.jpg")}/>
                <br></br>Intervals</p>
                <p className="duration-View"><BsClock />44:13 <AiOutlineTag />9,948M</p>
             </span>    
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/20-minutes-to-toned-thumb.jpg")} />
             <div className="playlist">
                 <p style={{fontWeight:'bolder'}}>12</p>
                 <p style={{fontSize:10}}> WORKOUTS</p>
                 <span class="material-icons">playlist_play</span>
             </div>
                <span><p className="desc-card">20 Minutes to Toned
                <img className="img-thumb" src={require("./images/20-minutes-to-toned-trainer.jpg")}/>
                </p>
             </span> 
             
             
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/charles-race-thumb.jpg")} />
             
                <span><p className="desc-card">Charles Race,Boston,
                <img className="img-thumb" src={require("./images/charles-race-trainer.jpg")}/>
                <br></br>Massachussets</p>
                <p className="duration-View"><BsClock />36:22 <AiOutlineTag />8,648M</p>
                <p>   </p>
                </span> 
             
             
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/full-body-hiit-thumb.jpg")} />
             <div className="playlist">
                 <p style={{fontWeight:'bolder'}}>12</p>
                 <p style={{fontSize:10}}> WORKOUTS</p>
                 <span class="material-icons">playlist_play</span>
             </div>
                <span><p className="desc-card">Full Body HIIT Series
                <img className="img-thumb" src={require("./images/full-body-hiit-trainer.jpg")}/>
                </p>
                </span> 
             
             
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/kafue-river-thumb.jpg")} />
             
                <span><p className="desc-card">Kafue River,Zambia-
                <img className="img-thumb" src={require("./images/kafue-river-trainer.jpg")}/>
                <br></br>Power Stroke Pyramid</p>
                <p className="duration-View"><BsClock />22:22 <AiOutlineTag />4,660M</p>
                </span> 
             
             
         </div>
         <div className="grid-card">
             <img className="video-card" src={require("./images/shred-and-burn-thumb.jpg")} />
             <div className="playlist">
                 <p style={{fontWeight:'bolder'}}>16</p>
                 <p style={{fontSize:10}}> WORKOUTS</p>
                 <span class="material-icons">playlist_play</span>
             </div>
                <span><p className="desc-card">Shred and Burn Series
                <img className="img-thumb" src={require("./images/shred-and-burn-trainer.jpg")}/>
                </p>
                </span> 
             
             
         </div> 
         
         </div>
     )
 }
}
 export default VideoCard;