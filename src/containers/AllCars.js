import React, { Component } from 'react';
import UnsoldContainer from './UnsoldContainer'
import SoldCarsContainer from './SoldCarsContainer'
import AddCarForm from '../components/AddCarForm'

class AllCars extends Component {

  state={
    cars:[],
    carsCopy:[],
    carSold: ''
  }

  componentDidMount() {
    fetch("http://localhost:3001/cars")
    .then(res => res.json())
    .then(allCars=>{
      let cars = allCars.map(eachCar =>{
        return {currentCar: eachCar, sold: false}
      })
       this.setState({cars: cars, carsCopy: cars})
    })
  }

  sellCar=(e,car)=>{
  let newArr = this.state.carsCopy.map(eachCar =>{
      if(eachCar.currentCar === car){
           eachCar.sold = true
        return eachCar
      }else {
        return eachCar
      }
    })
    this.setState({cars: newArr, carsCopy: newArr})
  }

  addCar=(e,car)=>{
    e.preventDefault()
    let newCar = {currentCar: car, sold: false}
    let newArr = [...this.state.cars,newCar]
    this.setState({cars: newArr, carsCopy: newArr})
  }



  render() {
    return (
      <div>
        <div className="parent">
          <div className="left">
            <UnsoldContainer allCars={this.state.carsCopy} sellCar={this.sellCar}/>
          </div>
          <div className="center">
            <AddCarForm addCar={this.addCar}/>
          </div>
          <div className="right">
            <SoldCarsContainer allCars={this.state.carsCopy}/>
          </div>
        </div>
      </div>
    );
  }
}
export default AllCars;
