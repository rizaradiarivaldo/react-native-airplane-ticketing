import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import _const, {_color, _fonts, _screens} from '../../const';
import Button from '../components/Button';
import TextR from '../components/Text';

export default function DetailPlaceScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: _const.backgroundBase}}>
      <StatusBar style="light" />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={{flex: 0.8, backgroundColor: 'red'}}>
        <Image source={require('../../assets/ciliwung.png')} style={{width: '100%', height: '100%', resizeMode: 'cover'}} />
      </View>
      <View style={{flex: 1, paddingHorizontal: _const.padding, paddingBottom: 31}}>
        <View style={{marginTop: -50, backgroundColor: _color.white, flex: 0.8, borderRadius: 24, paddingHorizontal: 20, paddingVertical: 30}}>
          <TextR fontFamily={_fonts.semibold} fontSize={16}>
            About
          </TextR>
          <TextR style={{marginTop: 6, lineHeight: 26}}>Berada di jalur jalan provinsi yang menghubungkan Denpasar Singaraja serta letaknya yang dekat dengan Kebun Raya Eka Karya menjadikan tempat Bali.</TextR>
          <View style={{marginTop: 20}}>
            <TextR fontFamily={_fonts.semibold} fontSize={16}>
              Photos
            </TextR>
            <View style={{flexDirection: 'row', marginTop: 6}}>
              <Image source={require('../../assets/ciliwung.png')} style={{width: 70, height: 70, borderRadius: 24}} />
              <Image source={require('../../assets/ciliwung.png')} style={{width: 70, height: 70, borderRadius: 24, marginLeft: 16}} />
              <Image source={require('../../assets/ciliwung.png')} style={{width: 70, height: 70, borderRadius: 24, marginLeft: 16}} />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <TextR fontFamily={_fonts.semibold} fontSize={16}>
              Interests
            </TextR>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../assets/check-circle.png')} style={{width: 16, height: 16, marginRight: 6}} />
                  <TextR>Kids Park</TextR>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../assets/check-circle.png')} style={{width: 16, height: 16, marginRight: 6}} />
                  <TextR>Kids Park</TextR>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../assets/check-circle.png')} style={{width: 16, height: 16, marginRight: 6}} />
                  <TextR>Kids Park</TextR>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../assets/check-circle.png')} style={{width: 16, height: 16, marginRight: 6}} />
                  <TextR>Kids Park</TextR>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <TextR fontFamily={_fonts.medium} fontSize={18}>
                IDR 2.500.000
              </TextR>
              <TextR color={_color.gray10} fontFamily={_fonts.light}>
                per orang
              </TextR>
            </View>
            <View style={{flex: 1}}>
              <Button label="Book Now" onPress={() => navigation.navigate(_screens.SignUp)} />
            </View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
