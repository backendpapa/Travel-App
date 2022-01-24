import React from 'react'
import { View, Image, Text, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native'
import { image } from '../../../styles/assets/Index.images'
import { styles } from '../../../styles/css/Index.css'



function Hero() {
    return (

        <View style={{}}>

            <ImageBackground style={styles.homeStyle.stylesheet.heroImageBackground} source={image.hero_image}>
                <View style={styles.homeStyle.stylesheet.heroMajorContainer}>

                    <View style={styles.homeStyle.stylesheet.heroMinorContainer}>

                        <View style={styles.homeStyle.stylesheet.flexContainerOne} >
                            <View style={{ flex: 1 }}>
                                {/* Image icon */}
                                <View style={{ borderRadius: 100, height: 50, width: 50, borderColor: 'white', borderWidth: 2 }}>
                                    <Image resizeMode="cover" style={{ height: '100%', borderRadius: 100 }} source={{ uri: "https://images.unsplash.com/photo-1642901463544-38317bf7e907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }} />
                                </View>
                            </View>
                            <View />
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image style={{ width: 30, height: 30, marginRight: 20 }} source={{ uri: "https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/ffffff/external-qr-code-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png" }} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image style={{ width: 30, height: 30 }} source={{ uri: "https://img.icons8.com/material-rounded/24/ffffff/appointment-reminders.png" }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View  style={{position:'absolute',bottom:10,padding:25}} >
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginRight:100}}>Where's your next destination?</Text>
                    <View style={{display:'flex',flexDirection:'row',marginTop:25,marginBottom:20,}}>
                        <View style={{height:80,width:80,backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15,justifyContent:'center',alignItems:'center',elevation:5}}>
                            <Image style={{width:50,height:50}} source={{uri:"https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/ffffff/external-flight-airport-icongeek26-glyph-icongeek26-3.png"}}></Image>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}
export default Hero