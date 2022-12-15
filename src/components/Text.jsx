import {useFonts} from 'expo-font';
import {useState} from 'react';
import {Text} from 'react-native';
import {_fonts} from '../../const';

export default function TextR({style, fontSize = 14, fontFamily, textAlign, children, color, ...props}) {
  const [font] = useState(fontFamily || 'regular');
  const [fontSized] = useState(fontSize);
  const [colorFont] = useState(color || _fonts.purpleColor);
  const [textAligned] = useState(textAlign || 'left');

  delete style?.color;
  delete style?.fontFamily;
  delete style?.fontSize;
  let [fontsLoaded] = useFonts({
    light: require('../../assets/fonts/Light.ttf'),
    regular: require('../../assets/fonts/Regular.ttf'),
    medium: require('../../assets/fonts/Medium.ttf'),
    semibold: require('../../assets/fonts/SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text style={[style, {fontFamily: font, color: colorFont, fontSize: fontSized, textAlign: textAligned}]} {...props}>
      {children}
    </Text>
  );
}
