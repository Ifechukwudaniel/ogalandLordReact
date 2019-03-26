import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
 
 const  MapComponent= (props)=>{
    return(
      <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
    )
 }

function withGeocode(WrappedComponent) {
    return class extends React.Component{

      state ={
        coordinate :{
          lat:0,
          lng :0
        }
      }

    componentWillMount(){
      this.geoCodeLoaction()
    }

    geoCodeLoaction(){
      debugger
      var location = this.props.mapElement.props.location

      var GeoCode  = new (window).google.maps.Geocoder()

      GeoCode.geocode({address:location},(result, status)=>{
         debugger;
         console.log(result)

      })
    }

      render(){


        return(
          <WrappedComponent {...this.props} />
        )
      }
    }
}

 
export const MapWithGeoCode = withScriptjs(withGeocode(withGoogleMap((MapComponent))));
  