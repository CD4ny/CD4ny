import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Language } from "@material-ui/icons";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";



const PersonalCard = (props: any) => {
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

    return (
        <ThemeProvider theme={theme}>
            <Grid xs={12} sm={12} md={6} lg={4} xl={3}>
                <Box mx={1} my={1} >
                    <Paper elevation={3}>
                        <Card variant="outlined" >
                            <Grid container justifyContent="flex-start"
                                alignItems="center" spacing={0} >

                                <Box m={1}>

                                    <Avatar style={{ height: '75px', width: '75px' }} alt={props.nick} src={props.avatar} />

                                </Box>
                                <Box m={1} style={{ flexGrow: 1 }}>
                                    <Typography variant="h5" color="initial" style={{ wordWrap: "break-word" }}>
                                        {props.nick}
                                    </Typography>
                                    <Typography variant="subtitle1" color="initial">
                                        {props.bio}
                                    </Typography>

                                    <Grid container justifyContent="flex-end"
                                        alignItems="center" spacing={0}>
                                        <IconButton aria-label="twitter" disabled={props.Twitter === null || props.Twitter === undefined}
                                            onClick={() => { window.location.assign(props.Twitter) }}
                                            style={{ color: (props.Twitter !== null && props.Twitter !== undefined ? "#1d9bf0" : "#6c899d"), }}
                                        >
                                            <Twitter />
                                        </IconButton>
                                        <IconButton aria-label="GitHub"
                                            disabled={props.GitHub === null || props.GitHub === undefined}
                                            onClick={() => { window.location.assign(props.GitHub) }}
                                            style={{ color: (props.GitHub !== null && props.GitHub !== undefined ? "#000" : "#888"), }}>
                                            <GitHub />
                                        </IconButton>
                                        <IconButton aria-label="Page" color="primary"
                                            disabled={props.Page === null || props.Page === undefined}
                                            onClick={() => { window.location.assign(props.Page) }}>
                                            <Language />
                                        </IconButton>
                                    </Grid>
                                </Box>

                            </Grid>


                        </Card>
                    </Paper>
                </Box>
            </Grid>
        </ThemeProvider>
    )

}

export default PersonalCard;