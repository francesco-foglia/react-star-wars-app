import React from 'react';

function PeopleSearch({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
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
  )
}

export default PeopleSearch;
