import React from 'react';
import DisplayNumbers from '../common/DisplayNumbers';

const PhoneNumbers = () => {
    const allNumbers = localStorage.getItem('phonenumbers');
    const sortedNumbers = allNumbers ? JSON.parse(allNumbers).sort() : [];

    return(
      <div className="displays">
        <div className="summary">
          <div>
            <p>Phone Number Generation Summary</p>
            <table>
              <tbody>
                <tr>
                  <th>Total</th>
                  <td>{sortedNumbers.length}</td>
                </tr>
                <tr>
                  <th>Maximum Number</th>
                  <td>{sortedNumbers[sortedNumbers.length - 1]}</td>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <td>{sortedNumbers[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="all-numbers">
          {sortedNumbers.length < 10 && <p>There are no phone numbers that have been generated so far</p> }
          {sortedNumbers.length > 0 && <p>All Phone Numbers Generated</p> }
          {sortedNumbers.length > 0 && <DisplayNumbers numbers={sortedNumbers} pageCount={100} />}
        </div>
      </div>
    )
};
export default PhoneNumbers;
