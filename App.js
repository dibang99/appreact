import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, KeyboardAvoidingView, StatusBar, ImageBackground, Platform,ScrollView} from 'react-native'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


// Search component
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        

    }
    this._getWeatherReport = this._getWeatherReport.bind(this);
    
  }


  async _getWeatherReport() {
   const response = await fetch('https://cloud-appweather.herokuapp.com/iot')
    const data = await response.json();
        this.setState({
           current_temp : data.current_temp,
           current_humidity : data.current_humidity,
           next: data.next,
           current_time: data.current_time
      })
  }
  async componentDidMount() {
    await this._getWeatherReport();
   console.log(this.state)
  }



    render() {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="default" />
           < ImageBackground
          source={require('./assets/cl.png')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
            <View style={styles.container}>
              <Header data={this.state.current_temp} data1={this.state.current_time} />
               <ScrollView style={styles.scrollView1}>
             <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1
                }}>
                </View>
               <ScrollView style={styles.scrollView}>
              <Content data={this.state.current_temp}  data2={this.state.next}  />
              <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1
                }}>
                </View>
              <Footer data1={this.state.current_humidity} data4={this.state.current_time} />
              </ScrollView>
              </ScrollView>
            </View>
            </ImageBackground>
          </SafeAreaView>
        )
    }
 }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0, 
      marginTop: 1,
      
    },
    imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  scrollView: {
    marginHorizontal: 0,
    paddingVertical: 20,
  },
  scrollView1: {
    paddingVertical: 0,
    marginHorizontal: 0,
  },
});
