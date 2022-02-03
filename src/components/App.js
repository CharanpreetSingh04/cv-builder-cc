import React,{Component} from "react";
import Header from './Header';
import Footer from './Footer';
import LeftMain from './LeftMain';
import RightMain from './RightMain';
import backGround from '../background.jpeg';
class App extends Component{
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

    handleCallback = (state) =>{
        this.setState(state);
    }

    render(){
        return (
            <div>
                <Header title="Resume Maker"/>
                <div className='main'>
                    <LeftMain parentCallback = {this.handleCallback}/>
                    <RightMain sentState={this.state}/>
                </div>
                <Footer/>
            </div> 
        );
    }
}
export default App;