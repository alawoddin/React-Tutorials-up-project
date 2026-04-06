/* eslint-disable react-hooks/static-components */
import React from 'react';
import Footer from './Footer';
import Test from './Test';

const Header = () => {

    const name = "developer";

    const x = 10

        const title = "demo";
        const age = 20;
    
        const job = "developer";



    function Greet() {
        return (
            <h1 style={{ color:  "green"}}>hello {name}</h1>
        )
    }

    function Car() {
        return (
            <h1>hello world</h1>

        )
    }
    return (

            <>




            <Test title={title} age={age} job={job} />

        <Footer name={name} age={x}  />





            <Car />
            <Greet />
            </>
    );
};

export default Header;