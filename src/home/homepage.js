import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { CurrentUser, Rooms } from '../common/constants';
import Header from '../common/header';
import Room from '../common/room';
import { buttonStyles, Colors, globalStyles } from '../global-styles';

const renderRoomItem = (item, nav) => {
    return (
        <Room room={item.item} nav={nav}/>
    )
}

const Home = props => {

    return (
        <View style={[styles.mainContainer]}>
            <Header nav={props.navigation}/>
            <View style={[styles.paddedContainer, globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex1]}>
                <View style={[globalStyles.fullWidth]}>
                    <Text style={[globalStyles.bigTitle]}>Hello {CurrentUser.name}</Text>
                    <Text style={[globalStyles.lightMedium]}>Welcome to Smart Home</Text>                    
                </View>
            </View>

            <View style={[styles.sectionHeader, styles.paddedContainer, globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex1]}>
                <View style={[globalStyles.fullWidth, globalStyles.flexRow, styles.subHeader]}>
                    <Text style={[globalStyles.lightBig]}>Your</Text>
                    <Text style={[globalStyles.mediumTitle]}> Home</Text>
                </View>
            </View>

            <View style={[styles.roomList, globalStyles.fullWidth, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.flex7]}>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={Rooms}
                        renderItem={item => renderRoomItem(item, props.navigation)}
                        keyExtractor={item => item.room.id} numColumns={2}>
                </FlatList>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
      paddingTop: 25,
      paddingBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontFamily: 'Inter_400Regular',
      flex: 1,
    },
    paddedContainer: {
        paddingLeft: 25,
        paddingRight: 25,
    },
    sectionHeader: {
        backgroundColor: '#cee0d6',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    roomList: {
        backgroundColor: '#cee0d6'
        // backgroundColor: 'rgba(54, 50, 50, 0.6)',
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // paddingTop: 25
    },
    subHeader: {
        paddingTop: 20,
        paddingBottom: 20
    }
});
