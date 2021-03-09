import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,Platform } from 'react-native'
import Card from './parts/Card';
import Card1 from './parts/Card1';

export default class Content extends Component {
    render() {
        return (

            
            <View style={styles.container}>
                <Card img={require("../assets/weather/rainy3.png")} bgcolor="#00000000" color1="#00000000" color2="#00000000" style={{borderTopLeftRadius: 70 }} data={this.props.data} />
                
                <Card1 img={require("../assets/weather/cloud1.png")} bgcolor="#00000000" color1="#00000000" color2="#00000000" style={{borderBottomRightRadius: 70 }} data2={this.props.data2} />
            </View>
            
        )
    }
}
const styles = StyleSheet.create({  
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 1
    }
})
