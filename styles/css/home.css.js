import { StyleSheet } from 'react-native'
const stylesheet = new StyleSheet.create({
    homeContainer:{
        height:'100%',
        backgroundColor:'white'
    },
    shadow:{
        position:'absolute',
        height:'100%',
        width:'100%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 20,
        backgroundColor: 'white',
        padding:10
    },
    heroContainer:{
        height:'60%'
    },
    heroImageBackground:{
        height: '100%', 
        width: '100%'
    },
    heroMajorContainer:{
        padding: 15, 
        flex: 1 
    },
    heroMinorContainer:{
        marginTop: '20%'
    },
    flexContainerOne:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10
    }
})
export const homeStyle={
    stylesheet
}
