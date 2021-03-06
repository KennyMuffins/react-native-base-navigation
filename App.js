import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import CourseCreateScreen from './src/screens/CourseCreateScreen'
import CourseDetailScreen from './src/screens/CourseDetailScreen'
import CourseListScreen from './src/screens/CourseListScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    courseListFlow: createStackNavigator({
      CourseList: CourseListScreen,
      CourseDetail: CourseDetailScreen
    }),
    CourseCreate: CourseCreateScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)