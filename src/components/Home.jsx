import React from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const fruitselect = useSelector((state) => state.gritReducer.fruit);
  const handleCat = (curr) => {
    const type = "SELECTED_CAT";
    const payload = curr;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <h1>Home</h1>
      <Grid item xs={12}>
        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <h1>{fruitselect.toUpperCase()}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Women")}
          >
            Womens
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Mens")}
          >
            Mens
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Fashion")}
          >
            Fashion
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Jwellery")}
          >
            Jwellery
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Cloths")}
          >
            Cloths
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCat("Toys")}
          >
            Toys
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
