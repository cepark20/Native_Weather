import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      //const {coords} = await Location.getCurrentPositionAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
            
      this.setState({isLoading : false});
      //Send to API and get weather
    } catch (error) {
        Alert.alert("Location Error", "설정에서 위치 권한을 허용해주십시오.");
    }  
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
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
