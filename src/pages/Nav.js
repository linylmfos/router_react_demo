import React, { Component } from 'react';
import Home from './Home';
import Mine from './Mine';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/home">Home页面</Link>
                </li>
                <li>
                    <Link to="/mine">Mine页面</Link>
                </li>
            </ul>
        )
    }
}
