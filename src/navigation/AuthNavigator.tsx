import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import * as screens from 'screens';
import {RoutesRecord} from './models';

export const AuthNavigator: FC = () => {
  const Stack = createNativeStackNavigator<RoutesRecord>();
  return (
    <Stack.Navigator
      initialRouteName="boading-screen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="boading-screen" component={screens.OnBoarding} />
      <Stack.Screen name="welcome-screen" component={screens.Welcome} />
      <Stack.Screen name="login-screen" component={screens.Login} />
      <Stack.Screen name="register-screen" component={screens.Register} />
      {/* <Stack.Screen name="home-screen" component={screens.Home} /> */}
    </Stack.Navigator>
  );
};
