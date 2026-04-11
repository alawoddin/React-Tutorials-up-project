import React from 'react';

import data from "../data"

const List = () => {

    const developers = ['web' , 'full stack', 'laravel']

    const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];


    return (
        <div>
            <h1>list of developer</h1>

            <ul>
                {/* {developers.map((dev) => <li>my name is {dev}</li>)} */}
                {/* {developers} */}
                {/* {developers.map((dev) => <li>your name {dev}</li>)} */}
                {developers.map((dev) => <li>title  {dev} </li>)}
            </ul>

            <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Users</h5>

    <ul>
      {data.map((item) => (
        <li key={item.id}>
          my name is {item.title} - my job is {item.job}
        </li>
      ))}
    </ul>

  </div>
</div>


            {/* <ul className='ps-3'>
                {data.map((all) => <li key={all.id}>check this {all.name}
                     - {all.job}</li>)}
            </ul> */}

            <ul>
                {cars.map((car) => <li key={car.id}>i am a {car.brand}</li>)}
            </ul>


            
        </div>
    );
};

export default List;