import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  CardContent,
  CardActions,
  Link,
  Divider,
} from "@material-ui/core";
import { StarRounded, AccountTreeRounded, LineStyle } from "@material-ui/icons";
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
      lg={3}
      xl={3}
      style={{ zIndex: 1 }}
      key={item.id}
    >
      <Box mx={0.5} my={1}>
        <Paper elevation={0} style={{ filter: "opacity(94%)" }}>
          <Card variant="outlined" style={{ borderRadius: "2px" }}>
            <Box display="flex" flexGrow={12}>
              {/* Indo de la izq */}
              <Box flexGrow={10}>
                <CardContent style={{ paddingBottom: "0" }}>
                  <Typography color="textSecondary">
                    On <Link href="/">GitHub</Link>
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.user}
                  </Typography>
                  <Typography variant="body2">some info</Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Box display="flex" alignItems="center">
                    <StarRounded
                      fontSize="small"
                      style={{ color: "#a19f9f" }}
                    />
                    7
                  </Box>
                  <Box display="flex" alignItems="center">
                    <AccountTreeRounded
                      fontSize="small"
                      style={{ color: "#a19f9f" }}
                    />
                    7
                  </Box>
                  <Box display="flex" alignItems="center">
                    <LineStyle fontSize="small" style={{ color: "#a19f9f" }} />7
                  </Box>
                </CardActions>
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
        alignItems="center"
        justifyContent="center"
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
    padding: "20px 10px",
    position: "relative",
    overflow: "hidden",
    width: "100",
  },
  circle: {
    width: "8cm",
    height: "4.5cm",
    borderRadius: "70%",
    zIndex: 0,
    backgroundColor: "tomato",
    position: "absolute",
    top: "-1cm",
    left: "-1cm",
    filter: "blur(2.4px)",
  },
  circle2: {
    right: "-1cm",
    top: "-1cm",
    width: "8cm",
    height: "6cm",
    borderRadius: "100%",
    zIndex: 0,
    backgroundColor: "#27b0e6",
    position: "absolute",
    filter: "blur(2.4px)",
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
    filter: "blur(2.4px)",
  },
}));

export default GithubReposList;
