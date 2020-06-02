import React from 'react';
import Loading from "./Loading";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <Loading />
  );
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
