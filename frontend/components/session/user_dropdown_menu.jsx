import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from '../../../node_modules/react-simple-dropdown/lib/components/Dropdown.js';
import { Link } from 'react-router-dom'

class UserDropDown extends React.Component {

	constructor(props){
		super(props)
		this.handleLinkClick = this.handleLinkClick.bind(this);
	};

	handleLinkClick () {
    	this.refs.dropdown.hide();
  	}

	render(){

		return(
			<Dropdown className="account-dropdown greeting_container" ref="dropdown">
				<DropdownTrigger>
		        	<img className="account-dropdown__avatar" src={this.props.profileImg} />
		        </DropdownTrigger>
		        <DropdownContent>
			          <ul className="account-dropdown__quick-links account-dropdown__segment">
			            <li className="account-dropdown__link">
			              <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
			              	<i className="fas fa-user-circle fa-2x"></i><p className="display-name">{this.props.currentUser}</p>
			                <button className="dropdown-logout" onClick={this.props.logout}>Log Out</button>
			              </a>
			            </li>
			            <li className="account-dropdown__link new-article">
			              <Link to="articles/new" className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
			                <button className="dropdown-new-article">New Article</button>
			              </Link>
			            </li>
		          </ul>
		        </DropdownContent>
			</Dropdown>
		)
	}
}

export default UserDropDown;