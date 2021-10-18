import { Grid, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from '@material-ui/styles';
import React, { Component } from "react";
import PersonalCard from "./PersonalCard";
import axios from "axios";
import users from "./users.json"

const useStyle = (theme: any) => ({
	offset: {
		minHeight: 56
	}
	,
	Title: {
		flexGrow: 1,
	}
})

interface IProps { classes: any }
interface IState { lista: string[] }




class Navbar extends Component<IProps, IState> {

	constructor(props: any) {
		super(props)
		this.state = {
			lista: []
		}
		this.getUsersData();

	}
	getUsersData() {



		const lista:any[] = []

		users.map((item: string, i) => {
			axios.get(`http://api.github.com/users/${item}`)
				.then(function (res) {

					const raw = JSON.stringify(res.data)
					const data = JSON.parse(raw)

					const { nick, avatar_url, bio, twitter_username, blog, html_url } = data
					lista[i] = (<PersonalCard nick={nick} avatar={avatar_url} bio={bio}
						Twitter={twitter_username} Page={blog} GitHub={html_url}></PersonalCard>)
					return 0
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
				.then(function () {
					// always executed
				});
			return null
		})
		this.setState({ lista: lista })
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<AppBar color="primary"  >
					<Toolbar>
						<Typography variant="h5" className={classes.Title} style={{ wordWrap: "break-word" }}>CD4ny!</Typography>
						<IconButton color="inherit" aria-label="menu" onClick={() => {

						}}>
							<MenuIcon>
							</MenuIcon>
						</IconButton>
					</Toolbar>
				</AppBar>
				<div className={classes.offset}></div>
				<Grid container spacing={0} alignContent="flex-start" justifyContent="flex-start">

					{this.state.lista}


				</Grid>
			</React.Fragment>
		);
	}
};

export default withStyles(useStyle)(Navbar);
