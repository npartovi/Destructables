import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSlider from '../slideshow/slide_show';
import SearchBarContainer from '../searchbar/search_bar_container';
import UserDropDown from './user_dropdown_menu';


class SessionButtons extends React.Component {
	constructor(props){
		super(props)
		this.logout = this.props.action;
	}

	sessionLinks(){

		if(this.props.currentUser){
			return(
				<UserDropDown 
					profileImg={this.props.currentUser.profileImg} 
					currentUser={this.props.currentUser.username}
					logout={this.logout}
						/>
				)
		}else {
			return(

				<div className="session_buttons">
					<Link to="/login">Login</Link>
					<span className="pipe">|</span>
					<Link to="/signup">Sign up</Link>
				</div>
				)
		}
	}

	render(){
		return(
				
			<div className="nav-bar-container">

				<Link className="nav-bar-link" to="/">
					<header className="nav-bar-logo">
						<i className="fas fa-bomb fa-4x"></i>
						<h1>Destructables!</h1>
					</header>
				</Link>


				<SearchBarContainer />

				<button className="nav-bar-create-article-button">
					<Link to="/articles/new">Create a new Article</Link>
				</button>

				{this.sessionLinks()}
			</div>
				
		)
		

	}
}


export default SessionButtons
