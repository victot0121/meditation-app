import { View, Text } from 'react-native'
import Content from './Content'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'


const AppGradient = ({children, colors}: {children: any , colors: any}) => {
  return (
    <LinearGradient colors={colors} className='flex-1'>
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

