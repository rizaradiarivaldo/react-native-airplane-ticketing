import {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {_color} from '../../const';
import TextR from './Text';

export default function Input({label = ''}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <TextR>{label}</TextR>
      <View
        style={{
          marginTop: 6,
          paddingHorizontal: 20,
          paddingVertical: 14,
          justifyContent: 'center',
          borderRadius: 17,
          borderWidth: 1,
          height: 55,
          borderColor: isFocused ? _color.purple : _color.gray,
        }}>
        <TextInput onFocus={() => setIsFocused(!isFocused)} onBlur={() => setIsFocused(!isFocused)} />
      </View>
    </View>
  );
}
