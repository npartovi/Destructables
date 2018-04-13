import React from 'react';


class CommentForm extends React.Component {
	constructor(props){
		super(props);

		this.state = { 
			body: "", 
			articleId: this.props.articleId,
			editComment: null,
			editBody: ""
		};

		this.update = this.update.bind(this);
		this.commentSubmitHandler = this.commentSubmitHandler.bind(this);
		this.editSubmitHandler = this.editSubmitHandler.bind(this);
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
			this.props.createComment(body);
		}
	}

	editSubmitHandler(id){
			let comment = {comment: this.state.editBody, id: id}
			this.props.updateComment(comment).then(() => this.setState({editComment: null}));
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

	setEditState(id){
		this.setState({editComment: id})
	}



	renderDeleteCommentButton(comment){

		if(!this.props.currentUser) return null
		if(this.props.currentUser.id === comment.userId){
			return(
				<div className ="logged_in_buttons">
					<button className="delete-button" onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
					<button onClick={() => this.setEditState(comment.id)} className="edit-button">Edit</button>
				</div>
				)
		}
	}

	renderComments(){



    	const comments = Object.values(this.props.comments);
	    if (comments && comments.length > 0) {
	      const renderedComments = comments.map( (comment, idx) => {
	      	let editForm;

	          		if (comment.id === this.state.editComment){
	          			editForm =  (
	          				<div>
	          				<form className="edit-form" onSubmit={() => this.editSubmitHandler(comment.id)}>
	          					<textarea className="edit-text-box" onChange={this.update('editBody')} placeholder={comment.body} />
	          					<input className="edit-text-submit" type="submit" value="Edit Comment" />
	          				</form>
	          				</div>
	          				)
	          		}else {
	          			editForm = (
			          			<div>
				          			<p className ="comment-body-text">{comment.body}</p>
				          			 <div>
				              			{this.renderDeleteCommentButton(comment)}
				              		 </div>
			              		</div>
			          		)
	          		}
	        return (
	          <li key={idx} className="comment-list-item">
	          	<div className="comments-show-header">
	          		<img src={comment.profileImg} />
	          		<div className="comment-header-content">
	          			<h3 className="comment-username">{comment.userName}</h3>
	          			<p className="comment-date">{new Date(comment.createdAt).toDateString()}</p>
	          		</div>
	          	</div>

	    			{editForm}
	                
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