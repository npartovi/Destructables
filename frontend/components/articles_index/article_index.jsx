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
						img_url={article.img_url}
					/>
				))
		)
	}

	render(){

		if(this.props.articles.length === 0){
			return null
		}

		return(
			<div>
				<ul>
					{ this.renderArticles() }
				</ul>
			</div>
		)
	
	}

}

export default ArticleIndex;