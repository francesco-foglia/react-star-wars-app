import React from 'react';

function PeopleSearch(props) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input className="input" type="text" placeholder="Luke Skywalker" />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>
      </p>
    </div>
  )
}

export default PeopleSearch;
