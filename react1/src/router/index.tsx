import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Guide from '../pages/guide';
import LoginStart from '../pages/LoginStart';
import Tellogin from '../pages/tellogin';
import Userlogin from '../pages/userlogin';
import Register from '../pages/register';
export default function index() {
    return (
        <div style={{width:"100vw",height:"100vh"}}>
            <Router>
                <Switch>
                    <Route path='/' component={Guide} exact></Route>
                    <Route path='/loginstart' component={LoginStart}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/userlogin' component={Userlogin}></Route>
                    <Route path='/tellogin' component={Tellogin}></Route>
                </Switch>
            </Router>
        </div>
    )
}
