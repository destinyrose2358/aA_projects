import React from "react";

export default class BenchMap extends React.Component {
  componentDidMount() {
    let map;
    map = new google.maps.Map(this.mapNode, {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    });
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    )
  }
}