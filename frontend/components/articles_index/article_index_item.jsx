import React from 'react';
import { Link } from 'react-router-dom';



const ArticleIndexItem = ({ title, imgUrl, article, username}) => (

	<li className="article-index-item">
		<Link className="article-index-link" to={`/articles/${article.id}`} >
			<img src={ imgUrl } />
		</Link>
		<div className="article-index-item-info">
			<Link className="article-index-item-title" to={`/articles/${article.id}`} >
				{title}
			</Link>
			<div className="article-user">
				<p>by <span className="article-index-user">{ username }</span></p>
			</div>
		</div>
	</li>

)

export default ArticleIndexItem

