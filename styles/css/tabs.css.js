import { StyleSheet } from 'react-native'
const stylesheet = new StyleSheet.create({
    iconContainer: {
        backgroundColor: '#FF4760', 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 10, 
        paddingBottom: 10, 
        marginTop: -13, 
        borderRadius: 30
    },
    icon:{
        height: 30, 
        width: 30, 
        
    },
    iconNoContainer:{
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 10, 
        paddingBottom: 10, 
        marginTop:-13   
    },
    barStyle:{
        backgroundColor: 'white', 
        margin: 20, 
        padding: 5, 
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 30,
        elevation: 5,
    }
})
export const tabStyle={
    stylesheet
}
