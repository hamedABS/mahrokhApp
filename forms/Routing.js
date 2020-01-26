import React from 'react';
import {showLocation} from "react-native-map-link";

export default class Routing extends React.Component{
    static onDoTheDirectionOnPress(latitude,longitude) {
        showLocation({
            latitude: latitude,
            longitude: longitude,
            sourceLatitude: 35.764482,  // optionally specify starting location for directions
            sourceLongitude: 51.395893,  // not optional if sourceLatitude is specified
            title: 'The White House',  // optional
            googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
            // googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',  // optionally specify the google-place-id
            // alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
            // dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
            // dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
            // cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
            // appsWhiteList: ['google-maps'] // optionally you can set which apps to show (default: will show all supported apps installed on device)
            // app: 'uber'  // optionally specify specific app to use
        })
    }
}
