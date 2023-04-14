import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyles } from '../global-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Welcome = props => {

  return (
    <View style={[globalStyles.flex1]}>
        <ImageBackground source={require("../../assets/home-background.jpg")} resizeMode="cover" style={styles.backImage}>
            <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>
                <Text style={[globalStyles.bigTitle, {color: '#fff'}]}>Welcome to</Text>
                <Text style={[styles.nameText]}>Smart Home</Text>
                <MaterialCommunityIcons name="home-assistant" size={40} color="#55b179" />
            </View>
            <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>
                <TouchableOpacity style={[globalStyles.flexCenter, globalStyles.vCenter, styles.startButton]} onPress={e => props.navigation.navigate('home')}>
                    <Text style={[styles.buttonText]}>Get Started
                    <MaterialCommunityIcons style={[globalStyles.padding15]} name="arrow-right" size={20} color="#fff" />
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontFamily: 'Inter_400Regular',
    paddingLeft: 25,
    paddingRight: 25,
  },
  nameText: {
    fontSize: 36,
    fontFamily: 'Baloo2_400Regular',
    color: '#fff'
  },
  backImage: {
    flex: 1,
    justifyContent: 'center'
  },
  startButton: {
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#02234e',
    shadowColor: '#468cd2',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter_400Regular',
    fontSize: 19
  }
});
