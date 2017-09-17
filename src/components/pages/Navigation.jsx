import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/page2" activeClassName="active">Page 2</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
