import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { GalleryPreiewData } from '@/constants/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons';



const AffiratinPratice = () => {

    const { itemId } = useLocalSearchParams()

    const [affirtation, setAffirtation] = useState<GalleryPreiewData>()


    const [sentences, setSentences] = useState<String[]>([])

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirtationData = AFFIRMATION_GALLERY[idx].data;

            const affirtationToStart = affirtationData.find(
                (a) => a.id === Number(itemId)
            );

            if (affirtationToStart) {
                setAffirtation(affirtationToStart)

                const affirmationsArray = affirtationToStart.text.split(".")

                if (affirmationsArray[affirmationsArray.length - 1] === "") {
                    affirmationsArray.pop()
                }
                setSentences(affirmationsArray)
                return;
            }
        }
    }, [])

    return (
        <View className='flex-1'>
            <ImageBackground source={affirtation?.image} resizeMode='cover' className='flex-1'>
                <AppGradient colors={["rgba(0,0,0,0.3)", "#rgba(0,0,0,0.8)"]}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>
                    <ScrollView
                        className='mt-20'
                        showsVerticalScrollIndicator={false}
                    >
                        <View className='h-full justify-center'>
                            <View className='h-4/5 justify-center'>
                                {sentences.map((sentence, idx) => (
                                    <Text key={idx} className='text-white text-3xl mt-14 mb-12 font-bold text-center '>{sentence}  . </Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default AffiratinPratice