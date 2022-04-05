import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import Avatar from '@mui/material/Avatar';

export default function PersonCard({ people, name }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
            <CardHeader
        avatar={
          people ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
            
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {people}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          people
            ? `https://image.tmdb.org/t/p/w500/${people}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>

          </Grid>
          <Grid item xs={6}>

          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {name(people)}

      </CardActions>
    </Card>
  );
}