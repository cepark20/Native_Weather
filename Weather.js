import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function Weather({temp}){
    return (
    <View style = {styles.container}>
        <Text>{temp}</Text>
    </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm","Rain","Drizzle","Snow","Clear","Atmosphere","Clouds","Haze","Fog","Mist","Dust"]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});