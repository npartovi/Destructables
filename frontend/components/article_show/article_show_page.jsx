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
			<div className="show-page-wrapper">
				<div className="show-page-container">
					<div className="show-page-header-information">
						<img src={this.props.article.imgUrl} />
						<h1>{this.props.article.title}</h1>
					</div>
				</div>
			</div>
		)
	}

}

export default ArticleShow