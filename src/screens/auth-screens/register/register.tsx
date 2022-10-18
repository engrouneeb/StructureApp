import React, {FC, useState} from 'react';
import {
  _Screen,
  _View,
  _Text,
  Input,
  _Image,
  _Button,
  _Checkbox,
} from 'components';
import {Background} from 'components';
import {Color} from 'const';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigation';

export const Register: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProps>();
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <_View flex={1}>
        <_Text
          size="xlrg"
          paddings={{padding: 20}}
          font="Raleway-Bold"
          color={Color.Primary}>
          Create Account
        </_Text>
        <_Text
          size="base"
          paddings={{paddingHorizontal: 20}}
          color={Color.Gray}>
          Create your account so you can manage your personal finances
        </_Text>
        <_View
          width={100}
          height={100}
          margins={{marginVertical: 20}}
          style={{
            backgroundColor: Color.White,
            borderRadius: 50,
            alignSelf: 'center',
          }}></_View>
        <Input
          style={styles.textInput}
          placeholder="User name"
          iconFamily="FontAwesome5"
          iconName="user-alt"
        />

        <Input
          style={styles.textInput}
          placeholder="Email "
          iconFamily="MaterialIcons"
          iconName="mail"
        />
        <Input
          style={styles.textInput}
          placeholder="Password"
          iconFamily="FontAwesome5"
          iconName="lock"
        />
        <Input
          style={styles.textInput}
          placeholder="Confirm Password"
          iconFamily="FontAwesome5"
          iconName="lock"
        />
        <_View flexDirection="row" paddings={{paddingLeft: 40, paddingTop: 20}}>
          <_Checkbox checked={agree} onToggle={setAgree.bind(null, !agree)} />
          <_Text margins={{marginTop: 10}} width={'80%'}>
            {`I agree to the `}
            <_Text color={Color.Primary} font="Raleway-SemiBold">
              Terms of Service
            </_Text>
            {` and `}
            <_Text color={Color.Primary} font="Raleway-SemiBold">
              Privacy Policy
            </_Text>
          </_Text>
        </_View>

        <_Button
          style={styles.buttons}
          margins={{marginTop: 40}}
          title={'Create Account'}
        />
        <_Button
          type="secondary"
          onPress={() => navigation.navigate('login-screen')}
          style={styles.buttons}
          margins={{marginTop: 20}}
          title={'Already have a account?'}
        />
      </_View>
    </_Screen>
  );
};
