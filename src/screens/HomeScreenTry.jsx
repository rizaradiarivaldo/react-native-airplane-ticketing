import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import _const, {_color, _fonts, _screens} from '../../const';
import Card from '../components/Card';
import CardThisYear from '../components/CardThisYear';
import TextR from '../components/Text';
import {_baseStyle} from '../styles/base';

export default function HomeScreenTry({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#aaa'}}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 36}}>
          <View style={{flex: 1, backgroundColor: 'white', borderRadius: 8}}>
            <TextR fontFamily={_fonts.semibold} fontSize={24}>{`Howdy,\nRiza Radia Rivaldo`}</TextR>
          </View>
          <View>
            <TextR fontFamily={_fonts.semibold} fontSize={24}>{`Howdy,\nRiza Radia Rivaldo`}</TextR>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 36, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: _const.padding}}>
          <View style={{flex: 1}}>
            <TextR fontFamily={_fonts.semibold} fontSize={24}>{`Howdy,\nRiza Radia Rivaldo`}</TextR>
          </View>
          <View style={{flex: 0.6, alignItems: 'flex-end'}}>
            <Image source={require('../../assets/rizaradiarivaldo.jpg')} style={{width: 60, height: 60, borderRadius: 999 / 2}} />
          </View>
        </View>
        <View style={{paddingHorizontal: _const.padding}}>
          <TextR color={_color.gray10} fontSize={16} fontFamily={_fonts.light} style={{marginTop: 6}}>
            Where to fly today?
          </TextR>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginTop: 30}}>
          {Array.from({length: 10}).map((_, index) => (
            <Card key={index} marginLeft={index > 0 ? 18 : 0} onPress={() => navigation.navigate(_screens.Detail)} />
          ))}
        </ScrollView>
        <View style={{marginTop: 30, paddingHorizontal: _const.padding}}>
          <TextR fontFamily={_fonts.semibold} fontSize={18}>
            New This Year
          </TextR>
          {Array.from({length: 10}).map((_, index) => (
            <CardThisYear key={index} marginTop={index > 0 ? 18 : 0} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
