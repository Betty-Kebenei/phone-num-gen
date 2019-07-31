import React, { Component } from 'react';

import DisplayNumbers from '../common/DisplayNumbers';
import FormForGeneration from './FormForGeneration';
import binarySearch from '../common/binarySearch';

class GenerateNumbers extends Component {
  state = {
    quantity: 0,
    phoneNumbers: []
  }

  componentDidMount(){
    if (localStorage.getItem("phonenumbers") === null) {
      localStorage.setItem('phonenumbers', JSON.stringify([]))
    }
  }

  handleOnChange = (event) => {
    this.setState({quantity: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { quantity } = this.state;
    this.setState({phoneNumbers: ''});
    let i = 0;

    while(i<quantity){
      const arr = [0];
      for(let j=0; j<9; j += 1){
        const digit = Math.floor(Math.random() * 10);
        arr.push(digit);
      }
      const currentNumber = arr.join('');

      // check for uniqueness using binarySearch
      const allNumbers = localStorage.getItem('phonenumbers');
      if(allNumbers !== null){
        const allNumbersArr = JSON.parse(allNumbers)
        const numbers = allNumbersArr.sort();

        // eslint-disable-next-line no-await-in-loop
        const response = await binarySearch(numbers, currentNumber);
        if(!response){
          this.addToLocalStorage(currentNumber);
          i += 1;
        }
      }
      else {
        this.addToLocalStorage(currentNumber);
        i += 1;
      }
    }
  }

  addToLocalStorage = (currentNumber) => {
    let existing;
    existing = localStorage.getItem('phonenumbers');
    existing = existing ? JSON.parse(existing) : [];
    existing.push(currentNumber);
    localStorage.setItem('phonenumbers', JSON.stringify(existing))
    this.setState(prevState => ({phoneNumbers: [...prevState.phoneNumbers, currentNumber]}));
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
        {phoneNumbers.length > 0 && <DisplayNumbers numbers={phoneNumbers} pageCount={100} />}
      </div>
    )
  }
}
export default GenerateNumbers;
