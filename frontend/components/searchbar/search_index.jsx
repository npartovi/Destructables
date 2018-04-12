import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articles = this.props.searchItems;
    const searchVal = this.props.searchVal;
    if (searchVal === '') return null;

    return(
      <div className="navbar-container">
        <ul className="search-item-container">
          {
            articles.map(article => <SearchIndexItem
              key={article.id}
              article={article}
              currentUser={this.props.currentUser}
              clearState={this.props.clearState}
              />)
            }
          </ul>
          <button className="search-close-button" onClick={this.props.clearState}>X</button>
      </div>
    );
  }
}

export default SearchIndex;