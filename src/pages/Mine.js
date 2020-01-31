import React, { Component } from 'react';
import querystring from "querystring";
import MineDemo from "./MineDemo"

const Mine = (props) => {
    const params = new URLSearchParams(props.location.search);
    const value = querystring.parse(props.location.search);
    console.log('value', value);
    console.log('vvaname', value.name);
    console.log('vvan age', value.age);
    console.log('params', params);
    console.log('params.get():', params.get("name"));
    console.log('params.get age():', params.get("age"));

    const clickHandle = () => {
        console.log("事件");
        console.log("事件props", props);
        props.history.push("/")
    }

    return (
        <div>
            Mine
            <button onClick={ clickHandle } >回到Home页面</button>
            <MineDemo />
        </div>
    )
}

export default Mine