import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props)
	}

	render(){


		return(
			<form className="nav-bar-search">
				<input type="text" className="nav-bar-search-text" />
				<button className="nav-bar-search-button">
					<i className="fa fa-search fa-lg search-icon" id="search-bar-icon" aria-hidden="true"></i>
				</button>
			</form>
		)


	}
}


export default SearchBar;