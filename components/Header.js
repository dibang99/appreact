import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>  </Text>
                {/* <Image source={require('../assets/weather/sunny2.png')} style={styles.img} /> */}
                <Text style={styles.city}>Hồ Chí Minh</Text>
                <Text style={styles.text3}>Mây nhiều</Text>
                <Text style={styles.temp_text}>{this.props.data}°  </Text>
                <Text style={styles.text1}>{this.props.data1}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
       
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'ghostwhite',
        marginTop: 15,
    },
    img: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginVertical: 10
    },
    temp_text: {
        color: 'ivory',
        fontSize: 70,
        fontWeight: '900',
        textAlign: 'center',
        marginLeft:30
    },
    city: {
        fontSize: 37,
        color: 'ivory',
        textAlign: 'center'
   },
   text1: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'linen',
        marginTop: 5,
        marginBottom: 30
    },
    text3: {
        fontSize: 13,
        color: 'white',
        marginLeft: 160
    },
    scrollView: {
    marginHorizontal: 0,
    paddingVertical: 20,
  },
})