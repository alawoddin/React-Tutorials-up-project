import React from 'react';
import Header from './Header';

const Test = (props) => {



    return (
        <div>
            <h1> i call the header props.</h1>
            <p>the title is {props.title}</p>
            <p>the age is {props.age}</p>
            <p>the job is {props.job}</p>
        </div>
    );
};

export default Test;