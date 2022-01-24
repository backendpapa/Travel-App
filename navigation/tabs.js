import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Image, View } from 'react-native'
const Tab = createMaterialBottomTabNavigator();
import { Home, Search, Guide, Trip } from '../screens/Index'
import { styles } from '../styles/css/Index.css';


function Tabs() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarActiveBackgroundColor="white" tabBarInactiveBackgroundColor="white" labeled={false} barStyle={styles.tabStyle.stylesheet.barStyle}

        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, tintColor }) => {
                    if (focused) {
                        return <View style={styles.tabStyle.stylesheet.iconContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png" }} />
                        </View>
                    }
                    else {
                        return <View style={styles.tabStyle.stylesheet.iconNoContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/000000/home.png" }} />
                        </View>
                    }
                },

            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, tintColor }) => {
                    if (focused) {
                        return <View style={styles.tabStyle.stylesheet.iconContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" }} />
                        </View>
                    } else {
                        return <View style={styles.tabStyle.stylesheet.iconNoContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/ios-filled/50/000000/search--v1.png" }} />
                        </View>
                    }

                },
            }} name="Search" component={Search} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, tintColor }) => {
                    if (focused) {
                        return <View style={styles.tabStyle.stylesheet.iconContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/material/50/ffffff/planner--v1.png" }} />
                        </View>
                    } else {
                        return <View style={styles.tabStyle.stylesheet.iconNoContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/material/50/000000/planner--v1.png" }} />
                        </View>
                    }
                },
            }} name="Guide" component={Guide} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, tintColor }) => {
                    if (focused) {
                        return <View style={styles.tabStyle.stylesheet.iconContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/material-outlined/50/ffffff/treasure-map.png" }} />
                        </View>
                    } else {
                        return <View style={styles.tabStyle.stylesheet.iconNoContainer}>
                            <Image style={styles.tabStyle.stylesheet.icon} source={{ uri: "https://img.icons8.com/material-outlined/50/000000/treasure-map.png" }} />
                        </View>
                    }
                },
            }} name="Trip" component={Trip} />
        </Tab.Navigator>
    );
}

export default Tabs;