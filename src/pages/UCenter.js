import React, { Component } from 'react';

const UCenter = (props) => {
    return (
        <div>
            Hello UCenter: {props.match.params.id}
        </div>
    )
};
export default UCenter