import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyles, RoomColors } from '../global-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RoomType } from './constants';

export const GetRoomIconName = roomtype => {
    switch (roomtype) {
        case RoomType.bathroom:
            return 'bathtub-outline';
        case RoomType.bedroom:
            return 'bed-outline';
        case RoomType.diningroom:
            return 'silverware-fork-knife';
        case RoomType.kitchen:
            return 'food-turkey';
        case RoomType.living:
            return 'sofa-outline';
        case RoomType.office:
            return 'check-network-outline';
        case RoomType.studyroom:
            return 'bookshelf';
        default:
            break;
    }
}

export const GetRoomIcon = props => {
    const roomIconName = GetRoomIconName(props.room.type);
    return (
        <MaterialCommunityIcons name={roomIconName} size={40} color="black" />
    )
}

const Room = props => {
  const gotoRoom = () => {
    props.nav.navigate('roomdetail', {room: props.room});
  }

  return (
    <TouchableOpacity onPress={gotoRoom}>
      <View style={[globalStyles.flexStart, globalStyles.vCenter, styles.room,
        {backgroundColor: props.room.room.color}]}>

        <GetRoomIcon room={props.room.room}/>

        <Text style={[styles.nameText, globalStyles.bold]}>{props.room.room.name}</Text>

        <Text style={[styles.deviceDetail]}>{props.room.room.devices.length} devices</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Room;

const styles = StyleSheet.create({
  nameText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    whiteSpace: 'nowrap'
  },
  deviceDetail: {
    fontSize: 15,
    fontFamily: 'Baloo2_400Regular',
    whiteSpace: 'nowrap'
  },
  bedroom: {
    backgroundColor: RoomColors.bedroom
  },
  room: {
    padding: 15,
    borderRadius: 15,
    height: 125,
    width: 175,
    marginVertical: 10,
    marginHorizontal: 10
  },
  roomIcon: {
    padding: 7,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff'
  }
});
