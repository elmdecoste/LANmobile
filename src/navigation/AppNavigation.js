import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import EventList from '../screens/EventList'
import EventCreate from '../screens/EventCreate'
import MenuBar from '../components/MenuBar'
import NavigationDrawer from '../components/NavigationDrawer'
import { colors } from '../constants'

const DrawerStack = DrawerNavigator({
  eventList: { screen: EventList },
  createEvent: { screen: EventCreate },
}, {
  gesturesEnabled: false,
  contentComponent: NavigationDrawer,
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack },
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: colors.primary},
    headerLeft: <MenuBar onPress={() => navigation.navigate('DrawerToggle')}/>,
    title: 'Welcome!',
    headerTintColor: 'white',
    gesturesEnabled: false,
  })
})

const LoginStack = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
}, {
  headerMode: 'none',
})

const AppNavigation = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
}, {
  headerMode: 'none',
  initialRouteName: 'loginStack',
})

export default AppNavigation
