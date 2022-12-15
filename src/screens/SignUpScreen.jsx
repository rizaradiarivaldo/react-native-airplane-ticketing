import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Alert, ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {_color, _fonts, _screens} from '../../const';
import {horizontalScale} from '../../metrics';
import Button from '../components/Button';
import Input from '../components/Input';
import TextR from '../components/Text';
import {_baseStyle} from '../styles/base';

export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView style={_baseStyle.container}>
      <StatusBar style="light" />
      <View>
        <TextR fontSize={24} fontFamily={_fonts.semibold}>
          {`Join us and get\nyour next journey`}
        </TextR>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: _color.white, borderRadius: 34, marginTop: 30, paddingHorizontal: 20, paddingVertical: 30}}>
          <Input label="Full Name" />
          <Input label="Email Address" />
          <Input label="Password" />
          <Input label="Hobby" />
          <View>
            <Button label="Get Started" onPress={() => navigation.navigate(_screens.Bonus)} />
          </View>
        </View>
      </ScrollView>
      <View style={{paddingTop: 50, paddingBottom: 73}}>
        <TouchableOpacity activeOpacity={0.5}>
          <TextR textAlign="center" fontSize={16} fontFamily={_fonts.light} style={{textDecorationLine: 'underline'}}>
            Terms and Conditions
          </TextR>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
