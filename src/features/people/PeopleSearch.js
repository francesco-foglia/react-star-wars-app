import React from 'react';

function PeopleSearch({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 className="title is-3">Star Wars App</h1>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Luke Skywalker"
            value={value}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </div>
  )
}

export default PeopleSearch;
