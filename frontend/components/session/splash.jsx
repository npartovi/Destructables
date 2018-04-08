import React from 'react';

import SimpleSlider from '../slideshow/slide_show';
import ArticleIndexContainer from '../articles_index/article_index_container';
import SlideShowText from './slide_show_animated_text';



const Splash =() => (
	
		<div className="Main">
			<SlideShowText />
			<SimpleSlider />
			<ArticleIndexContainer />
		</div>
	
)

export default Splash