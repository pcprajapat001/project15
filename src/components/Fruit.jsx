import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const Fruit = () => {
  const dispatch = useDispatch();
  const fruitselect = useSelector((state) => state.gritReducer.fruit);
  console.log("redux", fruitselect);
  const fruit = [
    "orange",
    "kiwi",
    "banana",
    "mango",
    "cherry",
    "Grapes",
    "watermelon",
    "Pineapple",
  ];

  const handleFruit = (str) => {
    const type = "ADDFRUIT";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              <h1>{fruitselect.toUpperCase()}</h1>
            </CardContent>
          </Card>
        </Grid>
        {fruit.map((item) => (
          <Grid item xs={3}>
            <Card
              sx={{
                height: 200,
                bgcolor: "lightsteelblue",
                textAlign: "center",
              }}
            >
              <CardContent>
                <h1>{item.toUpperCase()}</h1>
                <Button onClick={() => handleFruit(item)} variant="contained">
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
