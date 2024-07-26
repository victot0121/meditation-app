import { View, Text , FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { GalleryPreiewData } from "@/constants/models/AffirmationCategory"
import { Link } from 'expo-router';


interface GuidedAffirmatioonGalleryProps {
    title: string;
    previews: GalleryPreiewData[];
}

const GuidedAffirmatioonGallery = ({ title, previews, }: GuidedAffirmatioonGalleryProps) => {
    return (
        <View className='my-5'>
            <View className='mb-2'>
                <Text className='text-white font-bold text-xl'>{title}</Text>
            </View>
            <View  className=''>
               <FlatList
                   data={previews}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={(item)=>item.id.toString()}
                   renderItem={({item})=>(
                      <Link href={`/affirmation/${item.id}`} asChild>
                        <Pressable>
                            <View className='h-36 w-32 rounded-md mr-4 '>
                              <Image 
                                source={item.image}
                                resizeMode='cover'
                                className='w-full h-full'
                              />
                            </View>
                        </Pressable>
                      </Link>
                   )}
                   horizontal
               />
            </View>
        </View>
    )
}

export default GuidedAffirmatioonGallery