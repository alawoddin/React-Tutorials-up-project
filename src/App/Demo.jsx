import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const Demo = () => {

    const name = "alawoddin";

    const active = false;

    const x = 10;

    const title = "demo";
    const age = 20;
    const job = "developer";


    return (
        <div>


            <Navbar title={title} age={age} job={job} />

            {/* <Header /> */}



            

            <h1 className='myname' style={{ color: "blue" }}>hello {name}</h1>

            {/* <button onClick={() => alert("hello developer")} >click me</button>
             */}

             <button onClick={() => alert("welcome developer")}>click me </button>

            {x === 10 && <h1>the value is 10</h1>}

            <button disabled={active} onClick={() => alert("your button is off")}>click me</button>
            
        </div>
    );
};

export default Demo;