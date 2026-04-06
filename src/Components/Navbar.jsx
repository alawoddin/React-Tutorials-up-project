import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <h1>Navbar</h1>
            <p>the title is {props.title}</p>
            <p>the age is {props.age}</p>
            <p>the job is {props.job}</p>
        </div>
    );
};

export default Navbar;