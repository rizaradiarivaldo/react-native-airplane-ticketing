import {TouchableOpacity} from 'react-native';
import _const, {_color, _fonts} from '../../const';
import TextR from './Text';

export default function Button({label = '', onPress = () => {}, backgroundColor = _const.blueColor}) {
  return (
    <TouchableOpacity onPress={() => onPress()} activeOpacity={0.8} style={{borderRadius: 17, backgroundColor: backgroundColor, paddingVertical: 14, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <TextR color={_const.whiteColor} fontFamily={_fonts.medium} fontSize={18}>
        {label}
      </TextR>
    </TouchableOpacity>
  );
}
