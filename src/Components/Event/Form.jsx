import React, { useState } from 'react';

const Form = () => {

    const [name , setName] = useState("");

    const [job , setJob] = useState("");

    function handlechange(e) {
        setName(e.target.value);
    }


    function handlesubmit(e) {
        setName(e.target.value);
    }

    
    return (
        <>
        <form action="">
            <label htmlFor="">enter your name</label>
            <input type="text" value={name} onChange={handlechange} />
        </form>

        <p>your value is {name}</p>

        <form action="">
            <label htmlFor="">enter your job</label>
            <input type="text" onSubmit={handlesubmit}   />
        </form>

        <button onClick={handlesubmit}>click me </button>
        </>
    );
};

export default Form;