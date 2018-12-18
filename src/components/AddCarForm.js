import React, { Component } from 'react';

class AddCarForm extends Component {

  state={
    make: '',
    model: '',
    color: '',
    year: '',
    price: '',
    currentCar: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }

  addCar = (e,car)=>{
    e.preventDefault()
    this.props.addCar(e,car)
    this.setState({
      make: '',
      model: '',
      color: '',
      year: '',
      price: '',
      currentCar: ''
    })
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={(e)=>this.addCar(e,this.state)}>
            <label>Make: </label>
            <input type="text" value={this.state.make} onChange={this.handleChange} name="make"></input><br></br>
            <label>Model: </label>
            <input type="text" value={this.state.model} onChange={this.handleChange} name="model"></input><br></br>
            <label>Color: </label>
            <input type="text" value={this.state.color} onChange={this.handleChange} name="color"></input><br></br>
            <label>Year: </label>
            <input type="text" value={this.state.year} onChange={this.handleChange} name="year"></input><br></br>
            <label>Price: </label>
            <input type="text" value={this.state.price} onChange={this.handleChange} name="price"></input><br></br>
            <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default AddCarForm;
