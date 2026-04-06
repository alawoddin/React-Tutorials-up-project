import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <p>Hello, I am the footer component.</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

export default Footer;