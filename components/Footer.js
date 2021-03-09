import React, { Component } from 'react'
import { StyleSheet,
  View,
  Text,
  Platform, } from 'react-native';


export default class Footer extends Component {
  render() {
    return (
      <View >
        <Text style={styles.heading}> Thông tin bổ sung: </Text>
        <View style={styles.container}>
          <Text style={styles.text1}>Hôm nay: <Text> Hiện tại trời mát, có mưa nhỏ, nhiệt độ cao nhất sẽ là 33°. Chiều nay trời nhiều mây với nhiệt độ thấp nhất là 32°</Text></Text>
        </View>
        <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1
                }}></View>
        <View style={styles.container}>
          <Text style={styles.text}>ĐỘ ẨM </Text>
          <Text style={styles.text5}>KHẢ NĂNG MƯA </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text_pl1}>{this.props.data1}%</Text>
          <Text style={styles.text_pr1}>20% </Text>
        </View>
        <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1,
                    width: '90%',
                    marginLeft: 20
                }}></View>
        <View style={styles.container}>
          <Text style={styles.text2}>MẶT TRỜI MỌC </Text>
          <Text style={styles.textr2}>MẶT TRỜI LẶN </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text_pl2}>05:35</Text>
          <Text style={styles.text_pr2}>18:19 </Text>
        </View>
        <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1,
                    width: '90%',
                    marginLeft: 20
                }}></View>
       <View style={styles.container}>
         <Text style={styles.text3}>LƯỢNG MƯA </Text>
         <Text style={styles.textr3}>ÁP SUẤT </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text_pl3}>0,1 cm</Text>
          <Text style={styles.text_pr3}>1009 hPa </Text>
        </View>
        <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1,
                    width: '90%',
                    marginLeft: 20
                }}></View>
        <View style={styles.container}>
         <Text style={styles.text4}>GIÓ </Text>
         <Text style={styles.textr4}>CHỈ SỐ UV </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text_pl4}>N 0 km/h</Text>
          <Text style={styles.text_pr4}>1 </Text>
        </View>
         <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1,
                }}></View>

      </View>
    )
  }
}
   
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-around',
        marginRight: 10
      },
     heading: {
       fontSize: 30,
       textAlign: 'left',
       marginVertical: 10,
       fontWeight: '900',
       color: 'mintcream',
       marginBottom: 1,
      marginLeft: 15
     },
     text: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
       marginLeft: -20
      
     },
     text1: {
       fontSize: 18,
       color: 'white',
       textAlign:'left',
       marginTop: 0,
       marginLeft:25,
     },
     container1: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-around',
        marginLeft: -5,
        textAlign: 'left',
      },
      text_pr: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
     },
     text5: {
       fontSize: 15,
       color: 'lightgray',
     },
      text2: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
       marginLeft: -35
      
     },
      text3: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -70
     },
      text4: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -55
     },
     textr1: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -35
     },
     textr2: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -85
     },
     textr3: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -130
     },
     textr4: {
       fontSize: 15,
       color: 'lightgray',
       textAlign:'left',
      marginLeft: -35
     },
     text_pl1: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: -85
     },
     text_pl2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: -75
     },
     text_pl3: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: - 40
     },
     text_pl4: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: - 100
     },
     text_pr1: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: -100
     },
      text_pr2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: -100
     },
      text_pr3: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: -35
     },
      text_pr4: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginLeft: - 175
     },
    });