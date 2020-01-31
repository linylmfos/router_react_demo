import React, { Component } from 'react';
import Home from './Home';
import Mine from './Mine';
import { Link, NavLink } from 'react-router-dom';
import "./style.css"

export default class Nav extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink activeClassName="selected" to="/home">Home页面</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: 'green' }} to="/mine">Mine页面</NavLink>
                </li>
                <li>
                    <NavLink to={{
                        pathname: "/mine",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: { fromDashboard: true }
                    }}>Mine2页面</NavLink>
                </li>
                <li>
                    <NavLink to="/mine/ucenter">UCenter页面</NavLink>
                </li>
            </ul>
        )
    }
}
