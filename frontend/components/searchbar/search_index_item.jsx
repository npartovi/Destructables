import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;

    return (
      
        <Link to={`/articles/${article.id}`} onClick={this.props.clearState} >
          <li className='search-item'>
            <img
              src={article.imgUrl}
              className='search-thumbnail'
              />
            <span className='search-title'>{article.title}</span>
          </li>
        </Link>
      
    );
  }
}

export default SearchIndexItem;
