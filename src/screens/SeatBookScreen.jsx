import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {_color, _fonts} from '../../const';
import TextR from '../components/Text';
import {_baseStyle} from '../styles/base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function SeatBookScreen({}) {
  return (
    <SafeAreaView style={_baseStyle.container}>
      <StatusBar style="light" />
      <View>
        <TextR fontSize={24} fontFamily={_fonts.semibold}>
          {`Select Your\nFavorite Seat`}
        </TextR>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <BouncyCheckbox
          size={16}
          fillColor={_color.purpleButton}
          unfillColor="#FFFFFF"
          // text="Available"
          // iconStyle={{borderColor:x 'red'}}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 4,
          }}
          iconComponent={false}
          onPress={isChecked => {}}
        />
        <BouncyCheckbox onPress={isChecked => {}} />
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
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
    </View> */}
    </SafeAreaView>
  );
}
