import React from "react";
import PageTemplate from '../components/templatePeopleListPage';
import { getPeople } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToPlaylist';

const PeopleMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('people', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;


  return (
    <PageTemplate
      title='People'
      people={people}
      action={(person) => {
        return <AddToFavoritesIcon person={person} />
      }}
    />
  );
};
export default PeopleMoviesPage;
