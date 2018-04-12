import React from 'react';
import ArticleIndexItem from './article_index_item';


class ArticleIndex extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchArticles();
	}

	renderArticles(){

		return(
				this.props.articles.map( article => (
					<ArticleIndexItem 
						key={article.id}
						title={article.title}
						article={article}
						imgUrl={article.imgUrl}
						username={article.userName}

					/>
				))
		)
	}


	render(){
		if(this.props.articles.length === 0){
			return null
		}

		return(
			<div className="article-homepage-wrapper">
				<ul className="article-index-list">
					{ this.renderArticles() }
				</ul>
			</div>
		)
	
	}

}

export default ArticleIndex;