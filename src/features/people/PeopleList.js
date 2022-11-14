import React from 'react';
import PeopleItem from "./PeopleItem";
import EmptyList from "../generic/EmptyList";

function PeopleList({ people }) {
  return (
    <div className="columns is-multiline">
      {
        people.length > 0 && people.map(item =>
          <PeopleItem
            key={item.name}
            item={item}
          />
        )
      }
      {
        people.length === 0 && <EmptyList/>
      }
    </div>
  )
}

export default PeopleList;
