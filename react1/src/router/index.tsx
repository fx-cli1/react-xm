import React,{useEffect} from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux'
import Guide from '../pages/guide';
import {setNavflag} from "../action/navAction"
import LoginStart from '../pages/LoginStart';
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import Mine from '../pages/mine';
import Discover from '../pages/discover';
import Borrow from '../pages/borrow'
export default function index() {

    // const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(setNavflag(true))
    // }, [])

    const navflag = useSelector((state: any) => state.navReducers.navflag);
    console.log(navflag);

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Router>
                <Switch>
                    <Route path='/' component={Guide} exact></Route>
                    <Route path='/loginstart' component={LoginStart}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/mine' component={Mine}></Route>
                    <Route path='/discover' component={Discover}></Route>
                    <Route path='/borrow' component={Borrow}></Route>
                </Switch>
            </Router>
             {navflag ? <div className='nav'><a href="#/home">首页</a><a href="#/discover">发现</a><a href="#/mine">我的</a></div> : ''}
        </div>
    )
}
