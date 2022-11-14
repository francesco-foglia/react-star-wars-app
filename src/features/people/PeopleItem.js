import React from 'react';

function PeopleItem({ item }) {
  return (
    <h2 className="subtitle is-4">{ item.name }</h2>
  )
}

export default PeopleItem;
