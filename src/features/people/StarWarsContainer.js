import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectItems, selectLoading } from "./peopleSlice";
import PeopleSearch from "./PeopleSearch";
import PeopleList from "./PeopleList";

function StarWarsContainer() {
  const dispatch = useDispatch();
  const people = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);
  const [search, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(fetchPeople('https://swapi.dev/api/people/'))
  }, [dispatch]);

  const onClickHandle = () => {
    if (search !== '') {
      dispatch(fetchPeople(`https://swapi.dev/api/people/?search=${search}`))
    } else {
      dispatch(fetchPeople('https://swapi.dev/api/people/'))
    }
  };

  return (
    <>
      <PeopleSearch value={search} setValue={setSearchValue} />
      <button className="button is-dark my-5" disabled={isLoading} onClick={onClickHandle}>Search</button>
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
