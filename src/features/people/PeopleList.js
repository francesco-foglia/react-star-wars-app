import React from 'react';
import PeopleItem from "./PeopleItem";

function PeopleList({ people }) {
  return (
    <div>
      {
        people.map(item =>
          <PeopleItem
            item={item}
          />
        )
      }
    </div>
  )
}

export default PeopleList;
