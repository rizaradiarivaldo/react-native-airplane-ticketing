import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import _const, {_fonts, _screens} from '../../const';
import Button from '../components/Button';
import TextR from '../components/Text';

export default function GettingStartedScreen({navigation}) {
  return (
    <View style={styles.main}>
      <StatusBar style="light" />
      <ImageBackground source={_const.airplane_background} resizeMode="cover" style={styles.image}>
        <View style={styles.containerText}>
          <TextR textAlign="center" color={_const.whiteColor} fontFamily={_fonts.semibold} fontSize={32}>
            Fly Like a Bird
          </TextR>
          <TextR style={{marginTop: 10}} color={_const.whiteColor} textAlign="center" fontFamily={_fonts.light} fontSize={16}>
            Explore new world with us and let yourself get an amazing experiences
          </TextR>
        </View>
        <View style={styles.button}>
          <Button label="Get Started" onPress={() => navigation.navigate(_screens.SignUp)} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 42,
  },
  button: {
    marginTop: 50,
    marginBottom: 80,
    paddingHorizontal: 40,
  },
});
