import React from 'react';
import ArticleIndexItem from '../articles_index/article_index_item';


class UserProfile extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.fetchArticles();
	}


	renderArticles(){
		return(
				this.props.articles.map(article => {
					if(this.props.currentUser.id === article.userId){
					return(
						<ArticleIndexItem 
							key={article.id}
							title={article.title}
							article={article}
							imgUrl={article.imgUrl}
							username={article.userName}
						/>
					)
				}
				})
		)
	}

	renderHeader(){
		return(
			<div className="user-profile-banner">
				<img src={this.props.currentUser.profileImg} />
				<h1>{this.props.currentUser.username}</h1>
			</div>
		)
	}

	render(){
		if(this.props.articles.length === 0){
			return null
		}

		return(
			<div>
			{this.renderHeader()}
			<div className="article-homepage-wrapper">
				<ul className="article-index-list">
					{ this.renderArticles() }
				</ul>
			</div>
			</div>
		)
	
	}

}


export default UserProfile