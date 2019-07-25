import React, { Component } from 'react';

import DisplayNumbers from '../common/DisplayNumbers';
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
    this.setState({phoneNumbers: ''});
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
      existing = existing ? JSON.parse(existing) : [];
      existing.push(currentNumber);
      localStorage.setItem('phonenumbers', JSON.stringify(existing))
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
        {phoneNumbers.length > 0 && <DisplayNumbers numbers={phoneNumbers} />}
      </div>
    )
  }
}
export default GenerateNumbers;
