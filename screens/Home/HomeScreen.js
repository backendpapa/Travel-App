import React from 'react'
import {View,Text} from 'react-native'
import {styles} from '../../styles/css/Index.css'
import Hero from './components/Hero.component'


function Home(){
    return (
        <View style={styles.homeStyle.stylesheet.homeContainer}>
           <View style={styles.homeStyle.stylesheet.heroContainer}>
           <View style={styles.homeStyle.stylesheet.shadow}>
                
            </View>
           <Hero  />
           </View>
            <Text>Home is life!</Text>
            
        </View>
    )
}
export default Home;