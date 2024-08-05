import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { TimerContext } from '@/context/TimerContext'

const AdjustMeditationDuration = () => {

  const { setDuration} =  useContext(TimerContext)

   const handlePress = (duration: number) =>{
    setDuration(duration)
      router.back()
   }

  return (
    <View className='flex-1 relative'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766667"]}>
        <Pressable onPress={() => router.back()} className='absolute top-12 left-6 z-10'>
          <AntDesign name='leftcircleo' size={50} color="white" />
        </Pressable>
        <View className='justify-center h-4/5 mt-28'>
          <Text className='text-white mt-3 mb-6 ml-9'>Welcome to adject meditation duration</Text>
          <Text className='text-center font-bold text-3xl text-white  mb-8'>
            Adjust your meditation duration
          </Text>
          <View>

             <CustomButton title='10 minutes' onPress={()=>  handlePress(10)} containerStyles='m-5'/>
             <CustomButton title='5 minutes' onPress={()=>  handlePress(5 * 60)} containerStyles='m-5'/>
             <CustomButton title='10 minutes' onPress={()=>  handlePress(10 * 60)} containerStyles='m-5'/>
             <CustomButton title='15 minutes' onPress={()=>  handlePress(15 * 60)} containerStyles='m-5'/>
             <CustomButton title='20 minutes' onPress={()=>  handlePress(20  * 60)} containerStyles='m-5'/>
  
          </View>
        </View>
      </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration