import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import StepForm from '../steps/step_form';

class ArticleForm extends React.Component {
	constructor(props){
		super(props);

		this.emptyStep = {}

		this.state = {
			article: {
				title:""
			},
			steps: [{
				title: "",
				body: ""
			}],
			modalOpen: true,
			renderForm: false,
			coverImage: {imageFile: null, imageUrl: null}
		};

		this.modalFormHandler = this.modalFormHandler.bind(this);
		this.updateFile = this.updateFile.bind(this);
		this.renderHeaderImagePreview = this.renderHeaderImagePreview.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	updateFile(e){
		const file = e.currentTarget.files[0];
	    const fileReader = new FileReader();


	    fileReader.onloadend = () =>{
	    	this.setState( {coverImage:{imageFile: file, imageUrl: fileReader.result}});
	    }

	     if (file) {
	      fileReader.readAsDataURL(file);
	    }
	}

	handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append("article[title]", this.state.article.title);
		formData.append("article[img_url]",this.state.coverImage.imageFile);
		formData.append("article[body]","text");


		this.props.createArticle(formData).then(() => this.props.history.push("/"));
	}

	update(field){
		return (e) => {
			this.setState({article: {[field]: e.target.value} });
		}
	}

	modalFormHandler(e){
		this.setState({modalOpen: false});
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
								<button type="button" onClick={this.modalFormHandler} className="article-form-modal-button">Start Destructable</button>
							</form>
						</div>
					</div>
	
			</div>
		)
	}

	renderHeaderImagePreview(){
		if(this.state.coverImage.imageUrl){
			return(
				<div className='main-image-attachment-container'>
		          <img className='main-image-attachment'
		            src= {`${this.state.coverImage.imageUrl}`} />
		        </div>
			)
		}else {
			return(
			<div className="plus-icon">
				Click for Main Images
			</div>
			)
		}
	}



	render(){

		console.log(this.state)

		return(
			<div className="article-form">
				{this.renderModal()}
				<div className="article-form-container">
					<nav className="article-form-navbar">
						<form className="article-form-navbar-attachment">
							<input type="file" onChange={this.updateFile}/>
							{this.renderHeaderImagePreview()}
						</form>
						<div className="article-form-navbar-buttons">

						<div>
							<button className="article-form-navbar-button add">
								<i className="fa fa-plus plus-small-icon" aria-hidden="true"></i>Add<i className="fa fa-caret-down caret-small-icon" aria-hidden="true"></i>
							</button>
						</div>

						<button onClick={this.handleSubmit} type="submit" className="article-form-navbar-button submit">Publish</button>
						</div>

					</nav>
				</div>

				<div>
					<StepForm />
				</div>
				
			</div>
			
		)
	}



}

export default ArticleForm;