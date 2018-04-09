import React from 'react';
import CommentForm from './comment_form';

class ArticleShow extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchArticle(this.props.match.params.articleId);
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
					 />
				</div>
			)
		}else {
			return null
		}
	}

	render(){

		console.log(this.props)

		return(
			<div className="show-page-wrapper">
				<div className="show-page-container">
					<div className="show-page-header-information">
						<img src={this.props.article.imgUrl} />
						<h1>{this.props.article.title}</h1>
						<div className="comments-main-container">
							{this.renderCommentsAndForm()}
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default ArticleShow