import React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const Grit = () => {
  const dispatch = useDispatch();

  const handleGrit = (str) => {
    const type = "GRITING";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            onClick={() => handleGrit("Good Afternoon")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Good Afternoon
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => handleGrit("Good Evening")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Good Evening
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => handleGrit("Good night")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Good Night
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
