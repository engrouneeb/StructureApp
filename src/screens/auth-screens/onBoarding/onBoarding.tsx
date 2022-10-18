import React, {FC, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {_View, _Image, _Text, _Button, _Icon} from 'components';
import Swiper from 'react-native-swiper';
import {Color} from 'const';
import {BoardingPage} from 'modules';

export const OnBoarding: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const screenHeight = Dimensions.get('window').height;
  return (
    <Swiper
      buttonWrapperStyle={[styles.buttomWrapper, {top: screenHeight - 130}]}
      loop={false}
      paginationStyle={{position: 'absolute', bottom: 180}}
      activeDotColor={Color.Primary}
      dotColor={Color.Secondary}
      onIndexChanged={index => setActiveIndex(index)}
      nextButton={
        <_View style={styles.nextButton}>
          <_Text font="Raleway-Bold" color={Color.White} size="base">
            Next
          </_Text>
          <_Icon family="AntDesign" name="arrowright" />
        </_View>
      }
      prevButton={<></>}
      style={styles.wrapper}
      showsButtons={true}>
      <_View style={styles.slide}>
        <BoardingPage
          title="Get Your Bussiness Under Control"
          description="Create an account so you can manage your personal bussiness"
          image={require('assets/images/3.png')}
          activeIndex={activeIndex}
        />
      </_View>
      <_View style={styles.slide}>
        <BoardingPage
          title="Customize Your Budget Effectively"
          description="Set your bussiness budget according to your needs and priority scale"
          image={require('assets/images/1.png')}
          activeIndex={activeIndex}
        />
      </_View>
      <_View style={styles.slide}>
        <BoardingPage
          title=" Track Your Bussiness Sales Easily"
          description="Track and record your every sale and purchase easily to control your bussiness"
          image={require('assets/images/2.png')}
          activeIndex={activeIndex}
        />
      </_View>
      <_View style={styles.slide}>
        <BoardingPage
          title=" Operate Your Bussiness From Mobile App"
          description="Operate your bussiness from mobile app easily"
          image={require('assets/images/4.png')}
          activeIndex={activeIndex}
        />
      </_View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.PrimaryLight,
  },
  nextButton: {
    marginRight: 20,
    backgroundColor: Color.Primary,
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 4,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
  buttomWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 80,
  },
});
