import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='Header'> 
                <h2>Shelfie</h2>
                <Link to='/'>Dashboard</Link>
                <Link to='/add'>Add to Form</Link>
            </div>
        )
    }
};

export default Header;