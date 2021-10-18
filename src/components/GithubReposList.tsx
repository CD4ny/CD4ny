import { ThemeProvider } from "@material-ui/styles";
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
import "./reposStyle.css";
import data from "./testRepo.json";

// Componente react
const GithubReposList = (props: any) => {
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
      <Box mx={0.7} my={1}>
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
                <Divider style={{ width: "75%" }} />
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
                pr={1}
              >
                <Avatar
                  style={{ height: "100px", width: "100px" }}
                  alt={item.user}
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
        className="root"
      >
        {data.map((item) => reposCards(item))}
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="box"></div>
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

export default GithubReposList;
