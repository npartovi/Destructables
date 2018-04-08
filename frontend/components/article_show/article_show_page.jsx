import React from 'react';

class ArticleShow extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchArticle(this.props.match.params.articleId);
	}

	render(){

		return(
			<div>
				<h1>hello</h1>
			</div>
		)
	}

}

export default ArticleShow