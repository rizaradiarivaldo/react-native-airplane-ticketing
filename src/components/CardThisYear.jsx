import {Image, View} from 'react-native';
import {_color, _fonts} from '../../const';
import TextR from './Text';

export default function CardThisYear({marginTop = 0}) {
  return (
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: _color.white, padding: 10, borderRadius: 24, alignItems: 'center', marginTop}}>
      <View style={{flex: 0.6}}>
        <Image source={require('../../assets/ciliwung.png')} style={{width: 70, height: 70, borderRadius: 24}} />
      </View>
      <View style={{flex: 1}}>
        <TextR fontFamily={_fonts.medium} fontSize={18} numberOfLines={1} ellipsizeMode="tail">
          Danau Beratan
        </TextR>
        <TextR fontFamily={_fonts.light} numberOfLines={1} ellipsizeMode="tail" style={{marginTop: 5}}>
          Singaraja
        </TextR>
      </View>
      <View style={{flex: 0.4, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Image source={require('../../assets/start.png')} style={{height: 20, width: 20, marginRight: 3}} />
        <TextR fontFamily={_fonts.medium}>{`4.8`}</TextR>
      </View>
    </View>
  );
}
