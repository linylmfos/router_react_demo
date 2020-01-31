import React, { Component } from 'react';
import { Redirect, Prompt } from "react-router-dom"
export default class Shop extends React.Component {

    state = {
        isLogin: true,
        name: ""
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div>
                {
                  isLogin ? 
                  <div>Shop</div>
                  :
                  <Redirect to="/" />
                }
                <Prompt 
                  when= { !!this.state.name }
                  message={ '确定要离开吗' }
                />
                输入框： <input type="text" value={this.state.name} onChange={ (e) => this.setState({
                    name: e.target.value
                })} />
            </div>
        )
    }
}