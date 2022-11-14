import React, {useEffect} from 'react';
import PeopleItem from "./PeopleItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchPeople, selectError, selectItems, selectLoading} from "./peopleSlice";
import EmptyList from "../generic/EmptyList";

function PeopleList() {
  const people = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople('https://swapi.dev/api/people/'))
  }, [dispatch]);

  return (
    <div className="columns is-multiline">
      {
        isLoading && <h2 className="subtitle">Loading...</h2>
      }
      {
        !isLoading && people.length > 0 && people.map(item =>
          <PeopleItem
            key={item.name}
            item={item}
          />
        )
      }
      {
        !isLoading && people.length === 0 && <EmptyList/>
      }
    </div>
  )
}

export default PeopleList;
