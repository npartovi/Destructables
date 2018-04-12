import React from 'react';
import SearchIndex from './search_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(e) {
    event.preventDefault();

    const value = e.target.value;
    this.setState({ searchVal: value }, () => {
      this.props.searchDatabase(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: ''});
  }

  render() {
    return (
      <div className="navbar-search-container">
        <input
          className="navbar-search-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Let's Disassemble  ..."
          value={this.state.searchVal}
          />
        <SearchIndex
          currentUser={this.props.currentUser}
          searchItems={Object.values(this.props.searches)}
          searchVal={this.state.searchVal}
          clearState={this.clearState}
          />
      </div>
    );
  }
}

export default Search;