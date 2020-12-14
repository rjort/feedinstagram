import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Feed from '../pages/Feed'
import Search from '../pages/Search'
import NewPost from '../pages/NewPost'
import Profile from '../pages/Profile'
import Likes from '../pages/Likes'
import Comments from '../pages/Comments'
import Logo from '../components/Logo'

const AppStack = createStackNavigator()
const AppBottomTab = createBottomTabNavigator()

const MainBottomTabScreen = () => (
    <AppBottomTab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
            case 'Feed':
                iconName = 'home'
                break
            case 'Search':
                iconName = 'search'
                break
            case 'NewPost':
                iconName = 'plus-square'
                break
            case 'Profile':
                iconName = 'user'
                break
            default:
                console.log('Route without icon')
        }

        return <Icon name={iconName} size={size} color={color} />
        },
    })}
    tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#CCC',
    }}
    initialRouteName="Feed"
    >
        <AppBottomTab.Screen name="Feed" component={Feed} options={{ title: '' }} />
        <AppBottomTab.Screen name="Search" component={Search} options={{ title: '' }} />
        <AppBottomTab.Screen name="NewPost" component={NewPost} options={{ title: '' }} />
        <AppBottomTab.Screen name="Profile" component={Profile} options={{ title: '' }} />
    </AppBottomTab.Navigator>
)

const AppRoutes = () => (
    <AppStack.Navigator initialRouteName="Main" >
        <AppStack.Screen 
        name="Main" 
        component={MainBottomTabScreen} 
        options={{ 
            headerTitle: props => <Logo {...props} />,
            headerTitleAlign: 'center'
        }} 
        />
        <AppStack.Screen name="Likes" component={Likes} options={{ title: 'Curtidas' }} />
        <AppStack.Screen name="Comments" component={Comments} options={{ title: 'Comentários' }} />
    </AppStack.Navigator>
)

export default AppRoutes