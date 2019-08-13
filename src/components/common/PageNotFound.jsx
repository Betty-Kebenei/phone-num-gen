import React from 'react';
import '../../styles/PageNotFound.css';

const PageNotFound = (props) => (
  <div className="page-not-found">
    <p className="page-text">Page Not Found</p>
    <p className="status-text">404</p>
    <p className="go-text">GO TO</p>
    <button
      id="generate"
      type="button"
      onClick={() => props.history.push('/')}
    >
      Generate Numbers
    </button>
    <span className="or-text"> OR </span>
    <button
      id="view"
      type="button"
      onClick={() => props.history.push('/numbers')}
    >
      View All Numbers
    </button>
  </div>
);
export default PageNotFound;
