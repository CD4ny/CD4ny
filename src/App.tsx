import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, IconButton, Grid } from "@material-ui/core";
import PersonalCard from "./PersonalCard";
import UsersList from "./users.json"

const useStyle = makeStyles((theme) => ({
	offset: theme.mixins.toolbar
	,
	menuIcon: {
		marginRight: theme.spacing(2)
	},
	Title: {
		flexGrow: 1,
	}
}));

interface User {
	name: string
	age: string
}

function getUserInfo<T>(nick: String): Promise<T> {
	return fetch('https://api.github.com/users/' + nick)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json().then(data => data as T);
		})


}

async function CardsList(){
	const list: any[] = [0]
	for (let i = 0; i < UsersList.length; i++) {
		const info = await getUserInfo<{}>(UsersList[i]);
		let asd = JSON.stringify(info)
		const avatar_url = JSON.parse(asd)["avatar_url"]
		const name = JSON.parse(asd)["name"]
		const bio = JSON.parse(asd)["bio"]

		const github = JSON.parse(asd)["html_url"]
		const twitter = JSON.parse(asd)["twitter_username"]
		const page = JSON.parse(asd)["blog"]

		const persona = {
			"nick": name,
			"bio": bio,
			"avatar": avatar_url,
			"Twitter": twitter,
			"GitHub": github,
			"Page": page
		};
		list[i] = persona

	}

	return await list;
}
 const list = CardsList();

const Navbar = () => {

	const classes = useStyle();

	return (
		<React.Fragment>
			<AppBar color="primary"  >
				<Toolbar>
					<Typography variant="h5" className={classes.Title} style={{ wordWrap: "break-word" }}>CD4ny!</Typography>
					<IconButton color="inherit" className={classes.menuIcon} aria-label="menu" onClick={() => {

					}}>
						<MenuIcon>
						</MenuIcon>
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
			<Grid container spacing={0} alignContent="flex-start" justifyContent="flex-start">
				{list.map(
					(d:any, i: Number) => {
						return <PersonalCard nick={d.nick} bio={d.bio}></PersonalCard>
					}
				)
				}
			</Grid>
		</React.Fragment>
	);
};

export default Navbar;
