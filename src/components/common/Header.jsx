import React, { Component } from 'react';

import binarySearch from './binarySearch';

class Header extends Component {
  state = {
    number: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { number } = this.state;
    const allNumbers = localStorage.getItem('phonenumbers');
    if(allNumbers !== null){
      const allNumbersArr = JSON.parse(allNumbers)
      const numbers = allNumbersArr.sort();
      const response = await binarySearch(numbers, number);
      if(response) {
        // eslint-disable-next-line no-alert
        alert('Cheers!!! That number exists!')
      } else {
        // eslint-disable-next-line no-alert
        alert('We are sorry!!! That number DOES NOT exists!')
      }
      this.setState({number: ''})
    }
  }

  render(){
    const { number } = this.state;
    return(
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsed-navbar"
          aria-controls="collapsed-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/">Phone Number Generator</a>
        <div className="collapse navbar-collapse" id="collapsed-navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Generate Number</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/numbers">Phone Numbers</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
              placeholder="search number"
              value={number}
              onChange={event => this.setState({number: event.target.value})}
              />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Header;
