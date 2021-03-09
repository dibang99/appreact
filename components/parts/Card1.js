import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'

export default class Card1 extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center',  marginTop: 10, backgroundColor: this.props.bgcolor, borderRadius: 20  }}>
                <View style={{ ...styles.bgcard, backgroundColor:'orange',  justifyContent: 'flex-start', backgroundColor: this.props.color1, borderTopLeftRadius: 20, borderTopRightRadius: 20 , ...this.props.style  }}>
        <Text style={styles.text}>30 phút sau</Text>
                    <Image source={this.props.img} style={styles.img} />
                </View>
                <View style={{...styles.bgcard, backgroundColor: 'pink', zIndex: -1, elevation: -1 ,  justifyContent: "flex-end", backgroundColor: this.props.color2, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 , ...this.props.style  }}>
        <Text style={styles.text2}>{Math.round(this.props.data2*100)/100} °C </Text>
                </View>
           </View >
           
        )
    }
}
const styles = StyleSheet.create({
    bgcard: {
        width: 150,
        height: 120,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        alignSelf: 'center', 
        marginTop: 30,
        zIndex: 99
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '900',
        marginBottom: 20
    },
    text2: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '900',
        marginBottom: 30
    },
    
})