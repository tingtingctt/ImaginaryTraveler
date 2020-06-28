

import React from "react";
import "./style.css";
// import { StreetViewPanorama } from "react-google-maps";
import { StreetView } from "react-google-map-street-view";



// import {GoogleMap,withGoogleMap, Marker, StreetViewPanorama} from "react-google-maps";

// const Panorama = withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// );


function Panorama(props){

  return (

      <StreetView mapStyle={{height: window.innerHeight, width: window.innerWidth}} id="panorama" address={props.address} APIkey="AIzaSyD5QSvqKdaT_p-MglqLosMmhZPbPCE5Wns" streetView zoomLevel={15}/>
      // <StreetView latLang ={{lat: 48.8530, lng: 2.3499}} APIkey="AIzaSyD5QSvqKdaT_p-MglqLosMmhZPbPCE5Wns" streetView zoomLevel={15}/>
  );
}


  export default Panorama;