import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyles } from '../global-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const Header = props => {

  return (
    <View style={[styles.container, globalStyles.fullWidth, globalStyles.flexRow, globalStyles.flex1]}>
      <View style={[globalStyles.flexStart, globalStyles.flex1]}>
        <Pressable>
          <MaterialCommunityIcons name="dots-square" size={30} color="black" />
        </Pressable>
      </View>
      <View style={[globalStyles.flexEnd, globalStyles.flex1, globalStyles.flexRow, styles.nameLogo, globalStyles.vCenter]}>
        <Text style={[styles.nameText]}>Smart</Text>
        <MaterialCommunityIcons name="home-assistant" size={25} color="#55b179" />
        <Text style={[styles.nameText]}>Home</Text>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontFamily: 'Inter_400Regular',
    paddingLeft: 25,
    paddingRight: 25,
  },
  nameLogo: {
    padding: 5,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // backgroundColor: '#55b179',
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'Baloo2_400Regular'
  },
});
