import React, {useEffect} from 'react';
import PeopleItem from "./PeopleItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchPeople, selectItems} from "./peopleSlice";

function PeopleList() {
  const people = useSelector(selectItems);
  const dispatch = useDispatch();
  /*
  useEffect(() => {
    dispatch(fetchPeople('https://swapi.dev/api/people/'))
  });*/

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
