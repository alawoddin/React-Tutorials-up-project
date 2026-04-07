import React from 'react';

const Navbar = ({ title , age }) => {
    return (
        <div>
            <h1>Navbar</h1>
            <p>the title is {title}</p>
            <p>the age is {age}</p>
            {/* <p>the job is {props.job}</p> */}
        </div>
    );
};

export default Navbar;