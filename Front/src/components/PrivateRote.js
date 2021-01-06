import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')));
        let currentUser=currentUserSubject.value;
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