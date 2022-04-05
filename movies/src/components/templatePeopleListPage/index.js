import React from "react";
import Header from "../headerMovieList";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";

function PeopleListPageTemplate({ people, name }) {

  let displayedPeople = people
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
       // <PeopleList people={displayedPeople}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;