import React, {FC, useState} from 'react';
import {_Screen, _View, _Text, _Image, _Button, _Checkbox} from 'components';
import {Background} from 'components';
import {Color, Spacing} from 'const';

export const Home: FC = () => {
  return (
    <_Screen
      header={<_Text>Junaid</_Text>}
      background={<Background color={Color.Negative} />}
      hideTopSafeArea>
      <_View flex={1} paddings={{padding: 20}}>
        <_Text color={Color.Primary} size={'lrg'} font={'Raleway-SemiBold'}>
          Dashboard
        </_Text>
      </_View>
    </_Screen>
  );
};
