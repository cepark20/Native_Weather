import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from 'react-native';

const API_KEY = "35dc580ed880ad9c09b407ce2c9d8e1c";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main : {temp},
        weather
    }
  } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading : false, 
        temp,
        condition: weather[0].main
      });
    };
  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      //const {coords} = await Location.getCurrentPositionAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
            
      this.getWeather(latitude, longitude);
      
      //Send to API and get weather
    } catch (error) {
        Alert.alert("Location Error", "설정에서 위치 권한을 허용해주십시오.");
    }  
  };
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

