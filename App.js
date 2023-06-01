import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import _const, {_screens} from './const';
import BonusScreen from './src/screens/BonusScreen';
import DetailPlaceScreen from './src/screens/DetailPlaceScreen';
import GettingStartedScreen from './src/screens/GettingStartedScreen';
import HomeScreen from './src/screens/HomeScreen';
import SeatBookScreen from './src/screens/SeatBookScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreenTry from './src/screens/HomeScreenTry';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreenTry" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreenTry" component={HomeScreenTry} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name={_screens.GettingStarted} component={GettingStartedScreen} />
        <Stack.Screen options={{animation: 'slide_from_right'}} name={_screens.SignUp} component={SignUpScreen} />
        <Stack.Screen name={_screens.Bonus} component={BonusScreen} />
        <Stack.Screen name={_screens.Home} component={HomeScreen} />
        <Stack.Screen name={_screens.Detail} component={DetailPlaceScreen} />
        <Stack.Screen name={_screens.SeatBook} component={SeatBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
