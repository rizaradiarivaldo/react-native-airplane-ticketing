import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import _const, {_fonts, _screens} from '../../const';
import TextR from '../components/Text';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(_screens.GettingStarted);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.main}>
      <Image source={_const.airplane_logo} style={{width: 100, height: 100}} />
      <TextR style={{letterSpacing: 20, marginTop: 50}} color={_const.whiteColor} fontFamily={_fonts.medium} fontSize={32}>
        AIRPLANE
      </TextR>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: _const.blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
