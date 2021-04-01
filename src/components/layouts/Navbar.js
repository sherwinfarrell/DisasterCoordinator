import React from 'react';
import {Link} from 'react-router-dom';
import SignedIn from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from 'react-redux';

export const Navbar = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedIn profile={profile}/> : <SignedOutLinks/>;
    return(
        <nav className="navbarcss nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Disaster Management Coordinator</Link>
                {links}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
};

export default connect(mapStateToProps)(Navbar);