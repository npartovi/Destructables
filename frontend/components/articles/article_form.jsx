import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
// import StepForm from '../steps/step_form';

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
		this.addStep = this.addStep.bind(this);
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


		this.props.createArticle(formData).then((response) => {
			this.state.steps.forEach((step,idx) =>{
				step.article_id = response.payload.article.id;
				step.ord = idx + 1;
				this.props.createStep(step);
			});
		}).then(() => this.props.history.push("/"));
	}

	update(field){
		return (e) => {
			this.setState({article: {[field]: e.target.value} });
		}
	}

	updateStep(field, stepIdx){
	return (e) => {
		const newSteps = this.state.steps;
		newSteps[stepIdx][field] = e.target.value;
		this.setState({steps: newSteps});
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

	addStep(){
		const newSteps = this.state.steps
		const newStep = {title: "", body: ""}
		newSteps.push(newStep);
		this.setState({steps: newSteps})
	}

	renderSteps(){

		return (
			<div>
				<ul className="steps-list">
				{ this.state.steps.map((step, idx) => (
				<li className="steps-form-list">
					<div className="article-form-step-images">
						<form className="">
							<div className="step-icon">
								<i className="fa fa-plus plus-medium-icon " aria-hidden="true"></i>Click for Step Images
							</div>
							<input type="file" />
						</form>
					</div>
					<div className="article-steps-body">
						<div className="step-form-container">
							
								<form className="step-form" onSubmit={this.stepSubmitHandler}>
									<input className="step-form-title" onChange={this.updateStep('title', idx)} type="text" placeholder="Enter Step Title" />
									<textarea className="step-form-body" onChange={this.updateStep('body',idx)} placeholder="Enter Step Information" ></textarea>
								</form>
						</div>
					</div>
				</li>
				))}
				</ul>
			</div>
		)
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

				{this.renderSteps()}

				<div className="add-step-button">
					<button className="add-button" onClick={this.addStep}>Add Step</button>
				</div>
			</div>
			
		)
	}



}

export default ArticleForm;