import {Image, Pressable, View} from 'react-native';
import {_color, _fonts} from '../../const';
import TextR from './Text';

export default function Card({marginLeft = 0, onPress = () => {}}) {
  return (
    <Pressable style={{padding: 10, borderRadius: 24, backgroundColor: _color.white, width: 200, marginLeft}} onPress={() => onPress()}>
      <View style={{width: 180, height: 220}}>
        <Image source={require('../../assets/ciliwung.png')} style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 24}} />
        <View style={{position: 'absolute', top: 0, right: 0, flexDirection: 'row', alignItems: 'center', backgroundColor: _color.white, borderBottomLeftRadius: 14, padding: 5.5}}>
          <Image source={require('../../assets/start.png')} style={{height: 20, width: 20, marginRight: 3}} />
          <TextR fontFamily={_fonts.medium}>{`4.8`}</TextR>
        </View>
      </View>
      <View style={{padding: 10}}>
        <TextR fontFamily={_fonts.medium} fontSize={18}>
          Lake Ciliwung
        </TextR>

        <TextR fontFamily={_fonts.light} fontSize={14} color={_color.gray10}>
          Tasikmalaya
        </TextR>
      </View>
    </Pressable>
  );
}
