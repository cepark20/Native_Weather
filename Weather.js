import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather({temp}){
    return (
    <View style = {styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96}name="weather-lightning-rainy"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.halfContainer} />
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
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42
    }
});