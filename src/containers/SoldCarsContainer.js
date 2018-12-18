import React from 'react';
import SoldCar from '../components/SoldCar'

const SoldCarsContainer = ({allCars}) => (


  <div>
    {allCars.map((eachCar,idx) =>{if(eachCar.sold) return <SoldCar car={eachCar} key={idx}/>})}
  </div>
);
export default SoldCarsContainer;
