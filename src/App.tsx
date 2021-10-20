import { Grid, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from '@material-ui/styles';
import React, { Component } from "react";
import PersonalCard from "./PersonalCard";
import GithubReposList from "./components/GithubReposList";
import "./components/reposStyle.css"
const useStyle = (theme: any) => ({
	offset: {
		minHeight: 56
	}
	,
	Title: {
		flexGrow: 1,
	},
})

interface IProps {
	classes: any
}

interface IState {
}
class Navbar extends Component<IProps, IState> {

	constructor(props: any) {
		super(props)
		this.state = {

		}

	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<AppBar color="primary"  >
					<Toolbar>
						<Typography variant="h5" className={classes.Title} style={{ wordWrap: "break-word" }}>CD4ny!</Typography>
						<IconButton color="inherit" aria-label="menu" onClick={() => {
							console.log()
						}}>
							<MenuIcon>
							</MenuIcon>
						</IconButton>
					</Toolbar>
				</AppBar>
				<div className={classes.offset}></div>
				<Grid container spacing={0} alignContent="flex-start" justifyContent="flex-start" className="root" style={{ zIndex: 1 }}>



					<PersonalCard nick="Daniel"></PersonalCard>
					<GithubReposList />


				</Grid>

				<div className="circle"></div>
				<div className="circle2"></div>
				<div className="box"></div>




			</React.Fragment>
		);
	}
};

export default withStyles(useStyle)(Navbar);
