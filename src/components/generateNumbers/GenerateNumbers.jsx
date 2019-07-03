import React, { Component } from 'react';

import DisplayCurrentGeneration from './DisplayCurrentGeneration';
import FormForGeneration from './FormForGeneration';

class GenerateNumbers extends Component {
  state = {
    quantity: 0,
    phoneNumbers: []
  }

  handleOnChange = (event) => {
    this.setState({quantity: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { quantity } = this.state;
    let i = 0;
    let existing;
    while(i<quantity){
      const arr = [0];
      for(let j=0; j<9; j += 1){
        const digit = Math.floor(Math.random() * 10);
        arr.push(digit);
      }
      const currentNumber = arr.join('');
      existing = localStorage.getItem('phonenumbers');
      existing = existing ? existing.split(',') : [];
      existing.push(currentNumber);
      localStorage.setItem('phonenumbers', existing.toString())
      this.setState(prevState => ({phoneNumbers: [...prevState.phoneNumbers, currentNumber]}));
      i += 1;
    }
  }

  render(){
    const { quantity, phoneNumbers } = this.state;
    return(
      <div className="generator">
        <FormForGeneration
          onChange={this.handleOnChange}
          onSubmit={this.handleSubmit}
          quantity={quantity}
        />
        {phoneNumbers.length > 0 && <DisplayCurrentGeneration currentGeneration={phoneNumbers} />}
      </div>
    )
  }
}
export default GenerateNumbers;
