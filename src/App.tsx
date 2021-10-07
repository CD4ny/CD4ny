import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/GitHub";
import ContactMailRounded from "@material-ui/icons/ContactMailRounded";
import { makeStyles, IconButton } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
	offset: {
		...theme.mixins.toolbar, // min-height: 56px;
		marginBottom: "1rem", // margen opcional
	},
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
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<IconButton color="inherit" className={classes.menuIcon} aria-label="menu" onClick={() => { } }>
						<MenuIcon>
						</MenuIcon>						
					</IconButton>
					<Typography variant="h5" className={classes.Title}>CD4ny!</Typography>
					<IconButton color="inherit" className={classes.menuIcon} aria-label="menu" onClick={() => {
						window.open("https://github.com/CD4ny/","_blank")
					 } }>
						<SearchIcon>
						</SearchIcon>						
					</IconButton>
					<IconButton color="inherit" className={classes.menuIcon} aria-label="menu" onClick={() => {
						window.open("mailto://chavianodaniel99@gmail.com")
					 } }>
						<ContactMailRounded>
						</ContactMailRounded>						
					</IconButton>
					
				</Toolbar>
			</AppBar>
			<div className={classes.offset}>

			</div>
		</React.Fragment>
	);
};

export default Navbar;
