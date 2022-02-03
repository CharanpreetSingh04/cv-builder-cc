import React, { Component, memo } from "react";

class LeftMain extends Component{
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

    handleChange(field ,e){
        let state = this.state;
        if(field === "image"){
            const value = URL.createObjectURL(e.target.files[0]);
            state[field] = value;
            console.log(value);
        }
        else{
            state[field] = e.target.value;
        }
        this.setState(state);
    }


    validateEmail(email) { 
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }

    validatePhone(phone) { 
        var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
        return phoneRegex.test(phone);
    }

    validate(){
        const resultA = this.validateEmail(this.state.email);
        const resultB = this.validatePhone(this.state.phoneNumber);
        this.state.result = resultA&resultB;
        this.props.parentCallback(this.state);
    }
    render(){
        return(
            <div className='left'>
                <div><label>Name</label></div>
                <div><input type="text" onChange={this.handleChange.bind(this, "name")} required/></div>
                <div><label>Address</label></div>
                <div><input type="text" onChange={this.handleChange.bind(this, "address")} required/></div>
                <div><label>Phone Number</label></div>
                <div><input type="tel" onChange={this.handleChange.bind(this, "phoneNumber")} required/></div>
                <div><label>Email</label></div>
                <div><input type="email" onChange={this.handleChange.bind(this, "email")} required/></div>
                <div><label>Add Your Image</label></div>
                <div><input type="file" onChange={this.handleChange.bind(this, "image")}/></div>
                <div><label>Add Education</label></div>
                <div><textarea className='education-right' onChange={this.handleChange.bind(this, "education")}/></div>
                <div><label>Add Experience</label></div>
                <div><textarea type="text" className='experience-right' onChange={this.handleChange.bind(this, "experience")}/></div>
                <div><label>Add Hobbbies</label></div>
                <div><textarea type="text" className='hobbies-right' onChange={this.handleChange.bind(this, "hobbies")}/></div>
                <div><label>Add Awards and participation</label></div>
                <div><textarea type="text" className='participation-right' onChange={this.handleChange.bind(this, "awardParticipation")}/></div>
                <div><button type='button' onClick={this.validate.bind(this)}>Submit</button></div>

            </div>
        )
    }
}
export default memo(LeftMain);