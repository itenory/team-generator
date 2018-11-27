import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = { text: '' };

  onChange = evt => {
    this.setState({ text: evt.target.value });
  };

  // Submit text when user hit enter key
  onKeyDown = evt => {
    if (evt.keyCode === 13 || evt.which === 13) {
      this.props.onSubmit(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;
