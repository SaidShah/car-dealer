import React from 'react';

const SoldCar = ({car}) => (
  <div className="soldCars">
  <h2>{car.currentCar.year} {car.currentCar.make} {car.currentCar.model}</h2>
  <h3>Car is not-available</h3>
  <h3>color: {car.currentCar.color} | Sold for: ${car.currentCar.price}</h3>
  </div>
);

export default SoldCar;
