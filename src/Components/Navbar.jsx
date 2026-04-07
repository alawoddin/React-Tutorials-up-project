/* eslint-disable react-hooks/static-components */
import React from 'react';

const Navbar = ({ title , age }) => {

    const MyComponent = (props) => {
        return (
            <div style={{background: "blue" , color: "white" , padding: "20px"}}>
                {props.children}
            </div>
        )
    }


    

    const Card = ({children}) => {
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <>

        <div>
            <h1>Navbar</h1>
            <p>the title is {title}</p>
            <p>the age is {age}</p>
            {/* <p>the job is {props.job}</p> */}
        </div>

        <MyComponent>
             <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
        </MyComponent>

        <Card>
            <h1>react is very easy with test </h1>
        </Card>
        
        </>
    );


};

export default Navbar;