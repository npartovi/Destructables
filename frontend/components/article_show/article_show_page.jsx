import React from 'react';

class ArticleShow extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchArticle(this.props.match.params.articleId);
	}

	render(){

		console.log(this.props)

		return(
			<div>
				<h1>{this.props.article.title}</h1>
				<img src={this.props.article.imgUrl} />
			</div>
		)
	}

}

export default ArticleShow