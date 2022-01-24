import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { image } from '../../../styles/assets/Index.images'


function Hero() {
    return (

        <View style={{ }}>
           
            <ImageBackground style={{ height: '100%', width: '100%'}} source={image.hero_image}>
                <View style={{margin:15,}}>
                   <View style={{marginTop:'20%',display:'flex'}}>
                        <View style={{flex:4}}>
                            <Text>djddjf</Text>
                        </View>
                   </View>
                </View>
            </ImageBackground>
        </View>

    )
}
export default Hero