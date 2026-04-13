import React, { useState } from 'react';

const Opation = () => {

    const [myCar , setMyCar] = useState("Fiat");


    const handlechange  = (event) => {
        setMyCar(event.target.value)
    }
    return (
        <div>
             <form>
      <select value={myCar} onChange={handlechange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
        </div>
    );
};

export default Opation;