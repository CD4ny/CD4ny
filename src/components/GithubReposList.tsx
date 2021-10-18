import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
} from "@material-ui/core";
import data from "./testRepo.json";

// Componente react
const GithubReposList = (props: any) => {
  const classes = useStyle();

//   Para devolver cada targeta
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
        <Paper elevation={0} style={{filter: 'opacity(50%)'}}>
          <Card variant="outlined" style={{ borderRadius: "2px", filter: 'opacity(100%)'}}>
            <Box display="flex" flexGrow={12} p={1} py={2}>
                {/* Indo de la izq */}
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
              {/* Parte de la foto del avatar */}
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

//   Lo que se renderiza
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

// El tema
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

// Clases css
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
