import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';


const Private = ({ component: Component, ...rest }) => {
    const { User } = useContext(AuthContext)

    return (
        User.load ? <div>Loadig...</div> : (< Route {...rest} render={props => (
            User.logged ? <Component {...props} /> : <Redirect to="/signin" />
        )} />)
    )
};

export default Private;