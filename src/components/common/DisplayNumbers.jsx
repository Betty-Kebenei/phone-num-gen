import React from 'react';
import PropTypes from 'prop-types';

const DisplayCurrentGeneration = (props) => {
  const { numbers } = props;

  return (
    <div className="display-current-generation">
      {numbers.map((number, index) => index === 0 ? <span key={number}>{number}</span> : <span key={number}>,{number}</span>)}
    </div>
  )
}
DisplayCurrentGeneration.propTypes = {
  numbers: PropTypes.objectOf.isRequired
}
export default DisplayCurrentGeneration
