import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";
import { StyleSheet, Text, View, Alert } from 'react-native';

const API_KEY = "35dc580ed880ad9c09b407ce2c9d8e1c";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({isLoading : false, temp:data.main.temp});
    }
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
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}










const styles = StyleSheet.create({
  container: {
    flex: 1, // 모든 공간을 사용 가능함 
    justifyContent: "flex-end",
    padding: 20
  },
  yellowView:{
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView:{
    flex: 2, // 파랑색 뷰가 전체 공간 중 2만큼 차지한다. (3분의 2)
    backgroundColor: "blue"
  },
  text:{
    color: "blue"
  }
});

// 리액트 네이티브에서는 width나 height을 많이 쓸 필요가 없다 
// 레이아웃은 주로 flex를 사용하라
