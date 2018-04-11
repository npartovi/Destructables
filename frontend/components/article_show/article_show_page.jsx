import React from 'react';
import CommentForm from './comment_form';

class ArticleShow extends React.Component {
	constructor(props){
		super(props);
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
				Object.values(this.props.steps).map(step => (
					<div>
						<h1>{step.title}</h1>
						<p>{step.body}</p>
						<img src={step.stepImg} />
					</div>
				))
			)
		}else {
			return null
		}
	}

	renderHeaderShow(){
		if(this.props.article){
			return(
				<div className="show-page-container">
					<div className="show-page-header-information">
						<h1>{this.props.article.title}</h1>
						<img src={this.props.article.imgUrl} />
					</div>
				</div>
			)
		} else {
			return null
		}
	}

	render(){

		console.log(this.props.steps)
		

		return(
			<div className="show-page-wrapper">
				{this.renderHeaderShow()}
				{this.renderStepsPage()}
				{this.renderCommentsAndForm()}
			</div>
		)
	}

}

export default ArticleShow