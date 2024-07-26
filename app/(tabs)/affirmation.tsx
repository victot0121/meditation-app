import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import GuidedAffirmatioonGallery from '@/components/GuidedAffirmatioonGallery'

const affirmation = () => {
    return (
        <View className='flex-1 '>
            <AppGradient  colors={["#2e1f58", "#344266","#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                   <Text className='text-zinc-50 text-2xl font-bold mt-10'>Change Your beliefs with affirmation</Text>

                   <View>
                     {AFFIRMATION_GALLERY.map((g)=>(
                        <GuidedAffirmatioonGallery 
                           key={g.title}
                           title={g.title}
                           previews={g.data}
                        />
                     ))}
                   </View>
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default affirmation