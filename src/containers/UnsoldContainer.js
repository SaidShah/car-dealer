import React, {Component} from 'react';
import UnsoldCars from '../components/UnsoldCars';

class UnsoldContainer extends Component{

  state={
    currentCar: '',
    sold: ''
  }


  render(){
    let cars = this.props.allCars.map((eachCar,idx) =>{
      return eachCar.sold ? null :<UnsoldCars car={eachCar.currentCar} isSold={eachCar.sold} key={idx} sellCar={this.props.sellCar}/>
    })

    return(
    <div>
      {cars}
    </div>


  )
 }
}
export default UnsoldContainer;
