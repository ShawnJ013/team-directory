import React, { Component, PropTypes } from 'react';

export default class Listing extends Component {
  render() {
    return (
      <div>
        Listing goes here.
      </div>
    );
  }
}

Listing.propTypes = {
  data: PropTypes.array.isRequired,
};