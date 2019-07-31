import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

class DisplayCurrentGeneration extends Component {
  state = {
    activePage: 1,
    numbersPerPage: 100
  }

  handlePageChange = (pageNumber) => {
    this.setState({activePage: pageNumber});
  }

  render(){
    const { numbers } = this.props;
    const { activePage, numbersPerPage } = this.state;

    const indexOfLastNumber = activePage * numbersPerPage;
    const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
    const numbersToDisplayPerPage = numbers.slice(indexOfFirstNumber, indexOfLastNumber);

    return (
      <div>
        <div className="display-current-generation">
          {
            numbersToDisplayPerPage.map(
              (number, index) =>
              index === 0
              ? <span key={number}>{number}</span> :
              <span key={number}>,{number}</span>
              )
          }
        </div>
        <div className="paginate-numbers">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={numbersPerPage}
            totalItemsCount={numbers.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }

}

export default DisplayCurrentGeneration
