import React from 'react';



const ArticleIndexItem = ({ title, img_url}) => (

	<li>
		<span> Hello </span>
		<img src={ img_url } />
		<p>{title}</p>
	</li>

)

export default ArticleIndexItem