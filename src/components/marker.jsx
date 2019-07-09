import React, { Component } from 'react';

class marker extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div>
        <h2 className="article-title">Marker</h2>
        <p>flat</p>
      </div>
    );
  }
}

export default Marker;
