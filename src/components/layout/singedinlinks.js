import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="/signin">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lightrn-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;