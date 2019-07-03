import React from 'react';
import PropTypes from 'prop-types';

const DisplayCurrentGeneration = (props) => {
  const { currentGeneration } = props;

  return (
    <div className="display-current-generation">
      {currentGeneration.map((number, index) => index === 0 ? <span key={number}>{number}</span> : <span key={number}>,{number}</span>)}
    </div>
  )
}
DisplayCurrentGeneration.propTypes = {
  currentGeneration: PropTypes.objectOf.isRequired
}
export default DisplayCurrentGeneration
