import React from 'react'
import {Route} from 'react-router-dom'
import Blog from '../Blog';
import Contact from '../Contact';
import Home from '../Home'
import Login from '../Login';
function NavLink() {
    return (
        <div>
            <Route  exact path="/" component={Home} /> 
            <Route  exact path="/contact" component={Contact} /> 
            <Route  exact path="/login" component={Login} /> 
            <Route  exact path="/blog" component={Blog} /> 
           
            
        </div>
    )
}

export default NavLink;
