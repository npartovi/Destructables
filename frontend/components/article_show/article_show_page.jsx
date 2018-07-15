import React from 'react';
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';

class ArticleShow extends React.Component {
	constructor(props){
		super(props);

		this.renderDeleteArticle = this.renderDeleteArticle.bind(this);
		this.deleteArticleShowHandler = this.deleteArticleShowHandler.bind(this);
	}

	componentDidMount(){
		this.props.fetchArticle(this.props.match.params.articleId);
		this.props.fetchAllSteps(this.props.match.params.articleId);
	}


	renderCommentsAndForm(){
		if(this.props.article){
			return(
				<div>
					<CommentForm
						articleId={this.props.article.id}
						comments={this.props.comments}
						history={this.props.history}
						fetchComments={this.props.fetchComments}
						deleteComment={this.props.deleteComment}
						currentUser={this.props.currentUser}
						createComment={this.props.createComment}
						updateComment={this.props.updateComment}
					 />
				</div>
			)
		}else {
			return null
		}
	}

	renderStepsPage(){

		if(this.props.steps){
			return(
				Object.values(this.props.steps).map((step,idx) => (
					<div key={idx} className="step-show-container">
						<div className="seperator"></div>
						<h1 className="step-show-header">Step{idx + 1} : {step.title}</h1>
						<img className="step-show-img" src={step.stepImg} />
						<div className ="step-show-body">
							<p>{step.body}</p>
						</div>
					</div>
				))
			)
		}else {
			return null
		}
	}


	renderDeleteArticle(){

		if(!this.props.currentUser) return null


		if(this.props.currentUser.id === this.props.article.userId){
			return(
				<button className="delete-article-show" onClick={(e) => this.deleteArticleShowHandler(e, this.props.article.id)} >Delete Article</button>
				)
		}else{
			return null
		}
	}

	deleteArticleShowHandler(e, articleId){
		e.preventDefault()
		this.props.deleteArticle(articleId).then(() => this.props.history.push("/"))

	}

	renderHeaderShow(){
		if(this.props.article){
			return(
				
					<div className="show-page-header-information">
						{this.renderDeleteArticle()}
						<h1>{this.props.article.title}</h1>
						<p>by: {this.props.article.username}</p>
						<img src={this.props.article.imgUrl} />
					</div>
				
			)
		} else {
			return null
		}
	}

	render(){

		return(
		<div className="show-page-container">
			<div className="show-page-wrapper">
				{this.renderHeaderShow()}
				{this.renderStepsPage()}
				{this.renderCommentsAndForm()}
			</div>
		</div>
		)
	}

}

export default withRouter(ArticleShow)