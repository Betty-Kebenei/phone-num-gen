import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/PageNotFound.css';

const PageNotFound = (props) => (
  <div className="page-not-found">
    <p className="page-text">Page Not Found</p>
    <p className="status-text">404</p>
    <p className="go-text">GO TO</p>
    <button
      type="button"
      onClick={() => props.history.push('/')}
    >
      Generate Numbers
    </button>
    <span className="or-text"> OR </span>
    <button
      type="button"
      onClick={() => props.history.push('/numbers')}
    >
      View All Numbers
    </button>
  </div>
);

PageNotFound.propTypes = {
  history: PropTypes.objectOf.isRequired
}

export default PageNotFound;