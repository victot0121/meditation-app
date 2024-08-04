import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton'
import { Audio } from 'expo-av'
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/meditation-data'
import { unloadAsync } from 'expo-font'
import { TimerContext } from '@/context/TimerContext'


const Meditate = () => {

    //const [secondsRemaining, setSecondsRemaining] = useState(10)
    const { duration: secondsRemaining, setDuration } = useContext(TimerContext)

    const [isMeditating, SetIsMeditating] = useState(false)
    const [audioSound, setSound] = useState<Audio.Sound>()
    const [isPlayingAudio, setPlayingAudio] = useState(false)


    useEffect(() => {
        let timeId: NodeJS.Timeout;

        if (secondsRemaining === 0) {
            SetIsMeditating(false)
            return;
        }

        if (isMeditating) {
            timeId = setTimeout(() => {
                setDuration(secondsRemaining - 1);
            }, 1000)
        }

        return () => {
            clearTimeout(timeId)
        }

    }, [secondsRemaining, isMeditating])


    useEffect(() => {
        return () => {
            setDuration(10)
            audioSound?.unloadAsync();
        }
    }, [audioSound])



    const { id } = useLocalSearchParams();


    const formattedTimeMinture = String(Math.floor(secondsRemaining / 60)).padStart(2, "0")
    const formattedTimeSeconds = String(Math.floor(secondsRemaining % 60)).padStart(2, "0")


    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) setDuration(10)
        SetIsMeditating(!isMeditating)

        await toggleSound();
    }


    const toggleSound = async () => {
        const sound = audioSound ? audioSound : await initializeSound();

        const status = await sound?.getStatusAsync();

        if (status?.isLoaded && !isPlayingAudio) {
            await sound.playAsync();
            setPlayingAudio(true)
        } else {
            await sound.pauseAsync()
            setPlayingAudio(false)
        }
    }


    const initializeSound = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );

        setSound(sound)
        return sound;

    }

    const AdjustMeditationDuration = () => {
        if (isMeditating) toggleMeditationSessionStatus();

        router.push("/(model)/adjust-meditation-duration")
    }


    return (
        <View className='flex-1 '>
            <ImageBackground
                source={MEDITATION_IMAGES[Number(id) - 1]}
                resizeMode='cover'
                className='flex-1'
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>
                    <View className='flex-1 justify-center'>
                        <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center '>
                            <Text className='text-blue-800 text-4xl font-rmono'>{formattedTimeMinture}:{formattedTimeSeconds}</Text>
                        </View>

                    </View>
                    <View className='mb-5'>
                        <CustomButton
                            title='Adjust duration'
                            onPress={AdjustMeditationDuration} />
                        <CustomButton
                            title={isMeditating ? "STOP" : 'Start Meditation'}
                            onPress={toggleMeditationSessionStatus} containerStyles='mt-5' />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}


export default Meditate