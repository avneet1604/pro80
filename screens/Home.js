import React, { Component } from 'react';
import {Text, View,SafeAreaView,StyleSheet,StatusBar,Platform, Image,ImageBackground, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />

                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>

                <View style={styles.titleBar}> 
                <Image source={require("../assets/main-icon.png")} style={styles.titleImage}></Image>       
              <Text style={styles.titleText}>Stellar App</Text>
              
               </View>

               <TouchableOpacity style={styles.routeCards}
               onPress={()=>this.props.navigation.navigate("SpaceCraft")}>
                   <Text style={styles.routeText}>Space Craft</Text>
                   <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCards}
               onPress={()=>this.props.navigation.navigate("StarMap")}>
                   <Text style={styles.routeText}>Star Map</Text>
                   <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCards}
               onPress={()=>this.props.navigation.navigate("DailyPic")}>
                   <Text style={styles.routeText}>Daily Pictures</Text>
                   <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}></Image>
               </TouchableOpacity>
               </ImageBackground>

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage:{
      flex:1,
      resizeMode:'cover'
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCards:{
        flex:0.12,
        marginLeft:30,
        marginRight:30,
        margin:10,
        borderRadius:100,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage:{
        position:"absolute",
        height:80,
        width:80,
        resizeMode:"contain",
        right:15,
        top:-20
    },
    titleImage:{
        width: 150,
         height: 150 
    }
})



