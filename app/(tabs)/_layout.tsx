import React from 'react'
import { Tabs } from 'expo-router'
import Color from "@/constants/Colors"
import { MaterialCommunityIcons , Entypo} from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Color.primary}}>
        <Tabs.Screen 
        name='nature-meditate' 
        options={{tabBarLabel: "Mediate", 
            tabBarIcon:({color})=>(<MaterialCommunityIcons name="flower-tulip" size={24} color={color} />)
        }}
        />  
        <Tabs.Screen 
        name='affirmation' 
        options={{tabBarLabel: "Affirmations", 
            tabBarIcon:({color})=>(<Entypo name="open-book" size={24} color={color} />)
        }}
        />  
    </Tabs>
    
  )
}

export default TabLayout