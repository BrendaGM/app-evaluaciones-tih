import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authenticationService} from '../functions/service'
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        console.log('service',authenticationService);
        const currentUser=authenticationService.currentUserValue;
        /*if(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih'))){
            currentUser = JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')).login.userDetails;
        }*/
        console.log(currentUser)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/',state:{from:props.location} }} />
        }else{
            //return <Redirect to={{ pathname: '/home'}} />
            return <Component {...props}/>
        }
        // authorised so return component
    }} />
)