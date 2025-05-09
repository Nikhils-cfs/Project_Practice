import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Home from './Project/Login Form/LoginPage'
import LoginPage from './Project/Login Form/LoginPage'
import RegisterForm from './Project/Form Register/RegisterForm'
import Section from './Project/Login Form/Section/Section'

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <LoginPage/> */}
      {/* <RegisterForm/> */}
      <Section/>
      
    </View>
  )
}

const styles = StyleSheet.create({})        
