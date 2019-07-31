import React from 'react';

const FormForGeneration = (props) => {
  const { onChange, onSubmit, quantity } = props;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
        <label htmlFor="quantity">How many numbers do you want to generate? </label>
        <br />
        <input
          id="quantity"
          type="number"
          name='quantity'
          value={quantity}
          onChange={onChange}
          min={10}
          max={1000}
          required/>
      </div>
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
  )
}
export default FormForGeneration;
