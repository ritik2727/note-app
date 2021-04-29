import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div class="ui massive inverted menu">
            <div className="active red item">Notes</div>
            <div className="active right menu">
                <Link to='/' className ="item">Home</Link>
                <Link to='/notes/new'  className="item">Create</Link>
            </div>
        </div>
    );
}


export default Header;

  