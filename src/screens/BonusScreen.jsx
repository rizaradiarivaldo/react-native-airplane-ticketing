import {Text, View} from 'react-native';
import {_color, _fonts, _screens} from '../../const';
import Button from '../components/Button';
import TextR from '../components/Text';

export default function BonusScreen({navigation}) {
  return (
    <View style={{flex: 1, paddingHorizontal: 38}}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{backgroundColor: _color.backgroundCardBonus, height: 200, borderRadius: 34, padding: 24, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <TextR color={_color.white} fontFamily={_fonts.light}>
                Name
              </TextR>
              <TextR color={_color.white} fontFamily={_fonts.medium} fontSize={20} numberOfLines={1} ellipsizeMode="tail">
                Riza Radia Rivaldo Rivaldo RIvaldo Rivaldo Rivaldo RIvaldo Rivaldo
              </TextR>
            </View>
            <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TextR color={_color.white}>Pay</TextR>
            </View>
          </View>
          <View>
            <TextR color={_color.white} fontFamily={_fonts.light}>
              Balance
            </TextR>
            <TextR color={_color.white} fontFamily={_fonts.medium} fontSize={26}>
              IDR 280.000.000
            </TextR>
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 80}}>
        <TextR color={_color.purple} fontFamily={_fonts.semibold} fontSize={32}>
          Big Bonus 🎉
        </TextR>
        <TextR textAlign="center" color={_color.gray10} fontFamily={_fonts.light} fontSize={16} test>
          {`We give you early credit so that\nyou can buy a flight ticket`}
        </TextR>
        <View style={{width: '100%', marginTop: 50}}>
          <Button label="Start Fly Now" onPress={() => navigation.navigate(_screens.Home)} />
        </View>
      </View>
    </View>
  );
}
