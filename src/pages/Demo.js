import React, { Component } from 'react';
const Demo =({name}) => {
    console.log('name', name);
    return (
        <div>
            Demo: {name}
        </div>
    )
};

export default Demo;