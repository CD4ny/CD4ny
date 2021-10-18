import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import {
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  Grid,
  Box,
  CardHeader,
  Card,
  Typography,
  Avatar,
} from "@material-ui/core";
import data from "./testRepo.json";

const GithubReposList = (props: any) => {
  const classes = useStyle();

  const reposCards = (item: any) => (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={3}
      style={{ zIndex: 1 }}
      key={item.id}
    >
      <Box mx={1} my={1}>
        <Paper elevation={0}>
          <Card variant="outlined" style={{ borderRadius: "2px" }}>
            <Box display="flex" flexGrow={12} p={1}>
              <Box
                flexGrow={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
              </Box>
              <Box
                flexGrow={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  style={{ height: "75px", width: "75px" }}
                  alt={props.nick}
                  src={props.avatar}
                />
              </Box>
            </Box>
          </Card>
        </Paper>
      </Box>
    </Grid>
  );

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        alignContent="flex-start"
        justifyContent="flex-start"
        className={classes.root}
      >
        {data.map((item) => reposCards(item))}
        <div className={classes.circle}></div>
        <div className={classes.circle2}></div>
        <div className={classes.box}></div>
      </Grid>
    </ThemeProvider>
  );
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // sm: 596,
      // md: 992,
      // lg: 1196,
      // xl: 1020,
    },
  },
});

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eeeeee",
    paddingTop: "20px",
    paddingBottom: "20px",
    position: "relative",
    overflow: "hidden",
  },
  circle: {
    width: "8cm",
    height: "4.5cm",
    borderRadius: "70%",
    zIndex: 0,
    backgroundColor: "tomato",
    position: "absolute",
    top: "-1cm",
  },
  circle2: {
    right: '-1cm',
    top: '-1cm',
    width: "8cm",
    height: "6cm",
    borderRadius: "100%",
    zIndex: 0,
    backgroundColor: "#27b0e6",
    position: "absolute",
  },
  box: {
    width: "8cm",
    height: "6cm",
    zIndex: 0,
    backgroundColor: "#27b0e6",
    transform: "rotateZ(45deg)",
    position: "absolute",
    right: "50%",
    bottom: "-5cm",
  },
}));

export default GithubReposList;
