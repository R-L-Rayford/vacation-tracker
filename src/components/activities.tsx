import React from "react";
import NavBar from "./navBar";
// api stuff
import { LoadScript, GoogleMap, InfoWindow } from "@react-google-maps/api";

const Activities = () => {
  
  const handleUpdateLocation = () => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = 'location=${this.state.latitude},${this.state.longitude}';
    const radius = '&radius=16093.4';
    const type = '&types=restaurant';
    const key='&key=AIzaSyAPF9KPaXIaznVdcXE_E0Zu5PZuzDBCpAo';

    const restaurantSearch = url + location + radius + type + key;

    const fetchRestaurants = () => {
      fetch()
    }

  }
  
  return (
    <div className="center">
        <NavBar />

    </div>
  );
}

export default Activities;