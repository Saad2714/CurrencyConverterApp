import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const currencyPerRupee = {

    DOLLAR:0.014,
    DINAAR:0.0043,
    BITCOIN:0.0000041
} 


export default class App extends React.Component{

constructor (props){
super(props);
this.state = {
  inputValue :" ",
  resultValue: "0.0"
}

}



  render(){

  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.screenView}> 
          <View style ={styles.resultContainer}>
              <Text style ={styles.resultValue}>
                
                {this.state.resultValue}

              </Text>
          </View>
        <View style = {styles.inputContainer}>
              <TextInput 
              style={styles.input}
              placeholder="Enter Value"
              selectionColor="#c1c1c1"
              keyboardType="numeric"
              
              value={this.state.inputValue}
              onChangeText = { inputValue => this.setState({inputValue
              
              })}
              />


        </View>
      
      </View>



    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68',
    marginTop:20
  },
  screenView: {
    flex: 1,

  },
  resultContainer: {
    height :70,
    marginTop:20,
    justifyContent: "center",
    borderColor:"#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth:2,
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputContainer: {
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DE"
  },

input:{
  color:"white",
  fontSize:30
}
  



});
