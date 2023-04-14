import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from './src/global-styles';
import { useFonts, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home/homepage';
import { Baloo2_400Regular } from '@expo-google-fonts/baloo-2';
import RoomDetail from './src/common/roomdetail';
import Welcome from './src/home/welcome';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold,
    Inter_900Black, Baloo2_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
    <NavigationContainer >
    {/* screenOptions={{ headerShown: false, headerMode: 'none' }} */}
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={Welcome} options={{ title: '',
          headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/>
        <Stack.Screen name="home" component={Home} options={{ title: '',
          headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/>
        <Stack.Screen name="roomdetail" component={RoomDetail} options={{ title: '',
          headerStyle: styles.navHeaderStyle, headerShadowVisible: false, headerBackTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Inter_400Regular',
    backgroundColor: Colors.MainBackground,
  },
  bodyWrapper: {
  },
  contentContainer: {
      flex: 1,
      width: '100%'
  },
  navHeaderStyle: { 
    backgroundColor: Colors.MainBackground,
    height: 40,
    borderBottomWidth: 0,
    borderBottomColor: Colors.MainBackground
  }
});
