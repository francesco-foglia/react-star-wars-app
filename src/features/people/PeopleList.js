import React from 'react';
import PeopleItem from "./PeopleItem";

function PeopleList({ people }) {
  return (
    <div className="columns is-multiline">
      {
        people.map(item =>
          <PeopleItem
            key={item.name}
            item={item}
          />
        )
      }
    </div>
  )
}

export default PeopleList;
