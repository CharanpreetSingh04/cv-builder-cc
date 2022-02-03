import React, { Component, memo } from "react";
import img from '../default.jpeg';
class RightMain extends Component{
    state = {
        name: '',
        phoneNumber: '',
        address: '',
        email: '',
        image: '',
        education: '',
        experience: '',
        hobbies: '',
        awardParticipation: '',
        result: false
    }
    render(){
        this.state = this.props.sentState;
        if(this.state.image===''){
            this.state.image = img;
        }
        return(
            <div className='right'>
                
                <div className='pic-and-name'>
                    
                    <div className='everything-else-right'>
                            <div className="name-right">
                                <label>{this.state.name}</label>
                            </div>
                            <div className="address-right">
                            <label>{this.state.address}</label>
                            </div>
                            <div className='phone-right'>
                            <label>{this.state.phoneNumber}</label>
                            </div>
                            <div className='email-right'>
                            <label>{this.state.email}</label>
                            </div>
                    </div>
                    
                    <div className='image'>
                        {this.state.image === img && <img src={img}></img>}
                        {this.state.image !==img && <img src = {this.state.image}/>}
                    </div>
                </div>
                <div className='content'>
                    <div className='work'><h1>Experience</h1><br/><label>{this.state.experience}</label></div>
                    <div className='education'><h1>Education</h1><br/><label>{this.state.education}</label></div>
                    <div className='hobbies'><h1>Hobbies</h1><br/><label>{this.state.hobbies}</label></div>
                    <div className='awards'><h1>Awards and Participations</h1><br/><label>{this.state.awardParticipation}</label></div>
                </div>
            </div>
        )
    }
}
export default memo(RightMain);