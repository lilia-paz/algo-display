import React from "react";

// Select component.
const Select = ({ values, onChange }) => {
  return (
    <div className="control">
      <div className="control-icon">
        <i className="material-icons">&#xE152;</i>
      </div>
      <div className="select-arrow">
        <i className="material-icons">&#xE313;</i>
      </div>
      <select
        className="control-field filter-field form-control"
        onChange={onChange}
        defaultValue={values[0][1]}
      >
        {values.map((keyValue, i) => (
          <option key={keyValue[0]} value={keyValue[1]}>
            {keyValue[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

// Input component.
const Input = ({ onKeyUp }) => (
  <div className="control">
    <div className="control-icon">
      <i className="material-icons">&#xE8B6;</i>
    </div>
    <input
      className={"control-field search-field form-control"}
      onKeyUp={onKeyUp}
      type="text"
      placeholder={"Search..."}
    />
  </div>
);

const Checkbox = ({ onClick }) => (
 <div className="control">
   <input type="checkbox" id="filterStable" onChange={onClick} />
  <label htmlFor="filterStable"> Only Show Stable </label>
  </div>
);

// Header component.
const Header = ({ children }) => (
  <React.Fragment>
    <h2 className="section-title">
      <span>Sorting Algorithms</span>
    </h2>
    <div className="controls cf">{children}</div>
  </React.Fragment>
);

// Demo component.
const Demo = ({ children }) => (
  <section className="grid-demo">{children}</section>
);

export { Select, Header, Button, Input, Demo, Checkbox };



//cut out an