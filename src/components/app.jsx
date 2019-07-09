import React, { Component } from 'react';
import SimpleMap from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
//import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <SimpleMap center={this.center()} zoom={12} />
        </div>
      </div>
    );
  }
}

export default App;
