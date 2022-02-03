import React, {Component,memo} from 'react';
class Header extends Component{
    constructor(props){
        super(props);
    }
    title = this.props.title;
    render(){
        return(
            <header className='header'>
                <h1>{this.title}</h1>
            </header>
        )
    }
}

export default memo(Header);