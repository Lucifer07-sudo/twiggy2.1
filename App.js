import React from 'react'

import { View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native'

import {colors} from './src/global/styles'
import RootNavigator from './src/Navigation/rootnavigator'
// import SignInScreen from "./src/Screens/authScreens/SignInScreen"
// import SignInWelcomeScreen from './src/Screens/authScreens/WelcomeScreen'
export default function App(){
  return(
    <View style = {styles.container}>
      < StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.statusbar}
      />
      {/* <SignInScreen/> */}
      {/* <SignInWelcomeScreen/> */}
      

      <RootNavigator/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
