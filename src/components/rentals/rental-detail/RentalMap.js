import React,{Component} from 'react';
import {MapWithGeoCode} from '../../map/GoogleMap'


export class RentalMap extends Component {

  render() {
    return (
         <MapWithGeoCode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtLfnrWyGd5UK1nTDP26SQRctMuwyMi78&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `360px` }} />}
                mapElement={<div style={{ height: `100%` }} 
                location = {this.props.location}/>}
            />
    )
  }
}
