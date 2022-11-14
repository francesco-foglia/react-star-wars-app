import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPeople, selectItems, selectLoading} from "./peopleSlice";
import PeopleSearch from "./PeopleSearch";
import PeopleList from "./PeopleList";

function StarWarsContainer() {
  const dispatch = useDispatch();
  const people = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPeople('https://swapi.dev/api/people/'))
  }, [dispatch]);

  return (
    <>
      <PeopleSearch />
      {
        !isLoading && people.length > 0 && <PeopleList people={people} />
      }
      {
        isLoading && <h2 className="subtitle">Loading...</h2>
      }
    </>
  )
}

export default StarWarsContainer;
