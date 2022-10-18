import React, {FC} from 'react';

import {
  _View,
  _Screen,
  Background,
  _Image,
  _Text,
  _Button,
  _Icon,
} from 'components';
import {Color} from 'const';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';
import {StyleSheet} from 'react-native';
export const Welcome: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <_View flex={1} align="center" justify="center">
        <_Image
          height={350}
          width={'80%'}
          style={{alignSelf: 'center'}}
          margins={{marginVertical: 40}}
          source={require('assets/images/welcome.png')}
        />

        <_Text
          size="lrg"
          align="center"
          color={Color.Primary}
          font="Raleway-Bold">
          Hey! Welcome
        </_Text>

        <_Text width={'70%'} align="center">
          We provide the smartest way to manage your mobile bussiness.
        </_Text>

        <_View flex={1} justify={'flex-end'} align={'center'}>
          <_Button
            onPress={() => navigation.navigate('register-screen')}
            title="Register"
            style={styles.loginBtn}
          />
          <_Button
            title="I already have an account"
            type="secondary"
            margins={{marginTop: 15}}
            onPress={() => navigation.navigate('login-screen')}
            style={styles.registerBtn}
          />
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  loginBtn: {width: 350, height: 50},
  registerBtn: {
    width: 350,
    height: 50,
    marginBottom: 50,
    backgroundColor: Color.White,
  },
});
