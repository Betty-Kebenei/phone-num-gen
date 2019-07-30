import React, { Component } from 'react';

import DisplayNumbers from '../common/DisplayNumbers';
import FormForGeneration from './FormForGeneration';

class GenerateNumbers extends Component {
  state = {
    quantity: 0,
    phoneNumbers: [],
    numberExists: false,
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
        await this.binarySearch(numbers, currentNumber);
        const { numberExists } = this.state;
        if(!numberExists){
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

  binarySearch = (arr, key) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while(startIndex <= endIndex) {
      const mid = Math.floor((startIndex + endIndex) / 2);

      if(key === arr[mid]) {
        this.setState({numberExists: true})
      }
      else if(key > arr[mid]) {
        startIndex = mid + 1;
      }
      else {
        endIndex = mid - 1;
      }
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
        {phoneNumbers.length > 0 && <DisplayNumbers numbers={phoneNumbers} pageCount={100} />}
      </div>
    )
  }
}
export default GenerateNumbers;
