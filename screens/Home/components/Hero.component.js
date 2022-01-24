import React from 'react'
import { View,Image, Text, ImageBackground } from 'react-native'
import { image } from '../../../styles/assets/Index.images'


function Hero() {
    return (

        <View style={{ }}>
           
            <ImageBackground  style={{ height: '100%', width: '100%'}} source={image.hero_image}>
                <View style={{padding:15,flex:1}}>
                   
                   <View style={{marginTop:'20%'}}>
                       
                            <View  style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}} >
                            <View style={{flex:1}}>
                                {/* Image icon */}
                                <View style={{borderRadius:100,height:50,width:50,backgroundColor:'green',borderColor:'white',borderWidth:2}}>
                                    <Image resizeMode="cover" style={{height:'100%',borderRadius:100}} source={{uri:"https://images.unsplash.com/photo-1642901463544-38317bf7e907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}}  />
                                </View>
                            </View>
                            <View />
                            <Image style={{width:35,height:35}} source={{uri:"https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/ffffff/external-qr-code-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"}} />
                            
                        </View>
                   </View>
                </View>
            </ImageBackground>
        </View>

    )
}
export default Hero