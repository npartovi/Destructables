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
			debugger
			return(
				Object.values(this.props.steps).map((step,idx) => (
					<div className="step-show-container">
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

	renderHeaderShow(){
		if(this.props.article){
			return(
				
					<div className="show-page-header-information">
						<h1>{this.props.article.title}</h1>
						<img src={this.props.article.imgUrl} />
					</div>
				
			)
		} else {
			return null
		}
	}

	render(){

		console.log(this.props.steps)
		

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

export default ArticleShow