import React from 'react';
import { Link } from 'react-router-dom';



const ArticleIndexItem = ({article}) => (

	<li className="article-index-item">
		<Link className="article-index-link" to={`/articles/${article.id}`} >
			<img src={ article.imgUrl } />
		</Link>
		<div className="article-index-item-info">
			<Link className="article-index-item-title" to={`/articles/${article.id}`} >
				{article.title}
			</Link>
			<div className="article-user">
				<p>by <span className="article-index-user">{ article.username }</span></p>
			</div>
		</div>
	</li>

)

export default ArticleIndexItem

