import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import CardHeader from "@material-ui/core/CardHeader";
import FacouriteIcon from "@material-ui/icons/FavoriteRounded"
import Twitter from "@material-ui/icons/Twitter"
import GitHub from "@material-ui/icons/GitHub"
import Email from "@material-ui/icons/Email"

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { createTheme } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";



const PersonalCard = (props: any) => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,

                sm: 596,
                md: 992,
                lg: 1196,
                xl: 1020,
            },
        },
    });

    const useStyle = makeStyles((theme) => ({
        cardMedia: {
            paddingTop: '81.25%',
            borderRadius: '50%',
            margin: '28px'
        },
    }));
    return (
        <ThemeProvider theme={theme}>
            <Grid xs={12} sm={6} md={3} lg={3} xl={4}>
                <Card elevation={3}>
                    <Grid container justifyContent="flex-start"
                        alignItems="center" spacing={0} >

                        <Box m={1}>

                            <Avatar style={{ height: '75px', width: '75px' }} alt={props.nick.toString()} src={props.avatar.toString()} />

                        </Box>
                        <Box m={1} style={{ flexGrow: 1 }}>
                            <Typography variant="h5" color="initial">
                                {props.nick}
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                {props.bio}
                            </Typography>
                            <Grid container justifyContent="flex-end"
                                alignItems="center" spacing={0}>
                                <IconButton aria-label="add to favorites"
                                    onClick={() => { window.location.assign("http://127.0.0.1") }}
                                >
                                    <Twitter />
                                </IconButton>
                                <IconButton aria-label="share"
                                    onClick={() => { }}>
                                    <GitHub />
                                </IconButton>
                                <IconButton aria-label="share"
                                    onClick={() => { }}>
                                    <Email />
                                </IconButton>
                            </Grid>
                        </Box>

                    </Grid>


                </Card>
            </Grid>
        </ThemeProvider>
    )

}

export default PersonalCard;