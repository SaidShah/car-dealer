import React from 'react';

const UnsoldCars = ({car, isSold, sellCar}) => (
  <div className="eachCar">
    <h2>{car.year} {car.make} {car.model}</h2>
    {isSold ? <h3>Sold</h3> : <h3>Car is Available {isSold}</h3>}
    <h3>color: {car.color} | Price: ${car.price}</h3>
    <button onClick={(e) => sellCar(e,car)} className="sellButton">Mark as sold</button>
  </div>
);

export default UnsoldCars
