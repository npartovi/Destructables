import React from 'react';
import { Link } from 'react-router-dom';



const ArticleIndexItem = ({ title, imgUrl}) => (

	<li className="article-index-item">
		<Link className="article-index-link" to="">
			<img src={ imgUrl } />
		</Link>
		<div className="article-index-item-info">
			<Link className="article-index-item-title" to="">
				{title}
			</Link>
		</div>


		
	</li>

)

export default ArticleIndexItem