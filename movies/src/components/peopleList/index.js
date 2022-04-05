import React from "react";
import Person from "../personCard";
import Grid from "@mui/material/Grid";

const PeopleList = ( {people, name }) => {
  let peopleCards = people.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={m.id} person={m} name={name} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;