import React from 'react';


class CommentForm extends React.Component {
	constructor(props){
		super(props);

		this.state = { body: "", articleId: this.props.articleId};
		this.update = this.update.bind(this);
		this.commentSubmitHandler = this.commentSubmitHandler.bind(this);
		this.renderComments = this.renderComments.bind(this);
	}


	update(field){
		return (e) => {
			this.setState({[field]: e.target.value});
		};
	}


	commentSubmitHandler(){

		if(this.props.currentUser && this.state.body !== ""){
			const body = this.state;
			this.setState({body:""});
			this.props.createComment(body).then(() => this.props.fetchComments(this.props.articleId));
		}
	}

	commentForm(){
		if(this.props.currentUser){
			return(
				<div className="comments-form-container">
					<div className="comment-profile-img">
						<img src={this.props.currentUser.profileImg} />
					</div>
					<form onSubmit={() => this.commentSubmitHandler()} className="comments-form">
						<textarea className="comment_input" rows="10" className="comment-input" onChange={this.update('body')} value={this.state.body} />
						<div className="submit-button-comment">
							<button type="submit">Post Comment </button>
						</div>
					</form>
				</div>
			)
		}else {
			return null;
		}
	}

	renderComments(){

    	const comments = Object.values(this.props.comments);
	    if (comments && comments.length > 0) {
	      const renderedComments = comments.map( (comment, idx) => {
	        return (
	          <li key={idx} className="comment-list-item">
	          	<div className="comments-show-header">
	          		<img src={comment.profileImg} />
	          		<div className="comment-header-content">
	          			<h3 className="comment-username">{comment.userName}</h3>
	          			<p className="comment-date">{new Date(comment.createdAt).toDateString()}</p>
	          		</div>
	          	</div>
	              <p className ="comment-body-text">{comment.body}</p>
	          </li>
	        )
	      })
	      return (
	        <ul className="comment-list">
	          {renderedComments}
	        </ul>
	      )
	    } else {
	      return null;
	    }
	}


	render(){

		return(
			<div className="comments-container">
				{this.commentForm()}
				<div className="comment-title-header">
					<h1> Comments </h1>
				</div>
				{this.renderComments()}
			</div>
		)

	}
};



export default CommentForm;