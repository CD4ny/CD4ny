import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, IconButton } from "@material-ui/core";
import PersonalCard from "./PersonalCard";

const useStyle = makeStyles((theme) => ({
	offset:theme.mixins.toolbar
	,
	menuIcon:{
		marginRight:theme.spacing(2)
	},
	Title:{
		flexGrow:1,
	}
}));

const Navbar = () => {

	const classes = useStyle();

	return (
		<React.Fragment>
			<AppBar color="primary"  >
				<Toolbar>
					<Typography variant="h5" className={classes.Title}>CD4ny!</Typography>
					<IconButton color="inherit" className={classes.menuIcon} aria-label="menu" onClick={() => { } }>
						<MenuIcon>
						</MenuIcon>						
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div> 
			<PersonalCard nick="DAniel Chaviano" bio="Unnecesart explanations guide to hell" avatar="https://avatars.githubusercontent.com/u/64395192?v=4" />
		</React.Fragment>
	);
};

export default Navbar;
