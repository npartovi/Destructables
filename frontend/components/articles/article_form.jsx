import React from 'react';

class ArticleForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			article: {
				title:""
			},
			steps: [],
			modalOpen: true,
			renderForm: false
		};

		this.modalFormHandler = this.modalFormHandler.bind(this);

	}


	update(field){
		return (e) => {
			this.setState({article: {[field]:e.target.value} });
		}
	}

	modalFormHandler(e){
		this.setState({modalOpen: false})
	}


	renderModal(){

		if(this.state.modalOpen === false){
			return null;
		}

		return(
			<div className="title-modal">
				<div className="article-new-modal-background"></div>
					<div className="article-new-modal-form-container">

						<div className="article-new-modal-header">
							<img src="https://s3-us-west-1.amazonaws.com/destructabledev/articles/img_urls/000/000/012/original/create-intro-header.png" />
						</div>

						<div className="article-new-modal-form-body">
							<form className="article-new-modal-form">
								<input type="text" onChange={this.update('title')} className="article-new-modal-input" />
								<br/>
								<button onClick={this.modalFormHandler} className="article-form-modal-button">Start Destructable</button>
							</form>
						</div>
					</div>
	
			</div>
		)
	}


	render(){

		return(
			<div className="article-form">
				{this.renderModal()}
				<div className="article-form-container">
					<nav className="article-form-navbar">
						<form className="article-form-navbar-attachment">
							<input type="file" />
							<div class="plus-icon">
								<i class="fa fa-plus plus-big-icon" aria-hidden="true"></i>
								Click for Main Images
							</div>
						</form>
						<div className="article-form-navbar-buttons">

						<div>
							<button class="project-form-navbar-button add">
								<i class="fa fa-plus plus-small-icon" aria-hidden="true"></i>Add<i class="fa fa-caret-down caret-small-icon" aria-hidden="true"></i>
							</button>
						</div>

						<button class="article-form-navbar-button submit">Publish</button>
						</div>
						
					</nav>
				</div>
				
			</div>
			
		)
	}



}

export default ArticleForm;