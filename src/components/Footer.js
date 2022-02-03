import React, {Component,memo} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer className='footer'><h3>This is a place to add and make resumes quickly. Copyright Charanpreet Singh</h3></footer>
        )
    }
}

export default memo(Footer);