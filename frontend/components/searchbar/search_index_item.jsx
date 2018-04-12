import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;

    return (
      
        <li className='search-item'>
          <Link to={`/articles/${article.id}`} onClick={this.props.clearState} >
            <img
              src={article.imgUrl}
              className='search-thumbnail'
              />
            <span className='search-title'>{article.title}</span>
          </Link>
        </li>
      
    );
  }
}

export default SearchIndexItem;
