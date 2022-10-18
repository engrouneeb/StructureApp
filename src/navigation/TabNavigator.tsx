import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';
import {Image, StyleSheet} from 'react-native';
import {Color} from 'const';

const isTablet = DeviceInfo.isTablet();
const Tab = createBottomTabNavigator();

import {_Icon, _Image} from 'components';
import * as screens from 'screens';

export const TabNavigator: FC = () => {
  const home = require('assets/icons/home.png');
  const homeFill = require('assets/icons/homeFill.png');
  const store = require('assets/icons/shop.png');
  const storeFill = require('assets/icons/shopFill.png');
  const sell = require('assets/icons/sell.png');
  const sellFill = require('assets/icons/sellFill.png');
  const reports = require('assets/icons/reports.png');
  const reportsFill = require('assets/icons/reportsFill.png');
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {...styles.labelStyle},
        tabBarStyle: {
          ...styles.tabBar,
        },
        tabBarItemStyle: {
          justifyContent: 'space-around',
          top: isTablet ? -5 : 10,
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? homeFill : home;
          } else if (route.name === 'Sell') {
            iconName = focused ? sellFill : sell;
          } else if (route.name === 'Inventory') {
            iconName = focused ? storeFill : store;
          } else {
            iconName = focused ? reportsFill : reports;
          }
          return (
            <Image
              style={{
                tintColor: focused ? Color.Primary : Color.Secondary,
                width: 20,
                height: 20,
              }}
              source={iconName}
            />
          );
        },
        tabBarActiveTintColor: Color.Primary,
        tabBarInactiveTintColor: Color.Secondary,
      })}>
      <Tab.Screen name="Home" component={screens.Home} />
      <Tab.Screen name="Sell" component={screens.Home} />
      <Tab.Screen name="Inventory" component={screens.Home} />
      <Tab.Screen name="Reports" component={screens.Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Color.White,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 10,
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 75,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
  labelStyle: {
    position: 'absolute',
    bottom: isTablet ? 12 : -2,
    fontFamily: 'Raleway-SemiBold',
  },
});
