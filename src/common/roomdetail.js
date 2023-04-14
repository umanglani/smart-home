import { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyles, RoomColors } from '../global-styles';
import { DeviceType } from './constants';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const renderDevice = (room, device) => {

    const changeState = device => {
      //
    }
    
    return (
        <TouchableOpacity onPress={changeState(device.item)}>
        <View style={[globalStyles.flexStart, globalStyles.vCenter, styles.device,
          {backgroundColor: room.color, opacity: device.item.state === 'ON' ? 1 : 0.5}]}>
  
          <GetDeviceIcon device={device.item}/>
  
          <Text style={[styles.nameText]}>{device.item.name}</Text>
  
          <Text style={[styles.deviceStateText]}>{device.item.state}</Text>
        </View>
      </TouchableOpacity>
    )
};

const Devices = room => {

    return (
        <View>
            <FlatList
                data={room.room.devices}
                keyExtractor={item => item.name}
                renderItem={item => renderDevice(room.room, item)}
                numColumns={2}
            >
            </FlatList>
        </View>
    )
};

const getDeviceIconName = (deviceType, deviceState) => {

    switch (deviceType) {
        case DeviceType.light:
            return deviceState === 'ON' ? 'lightbulb-on-outline' : 'lightbulb-off-outline';

        case DeviceType.shower:
            return 'shower-head';

        case DeviceType.aircon:
            return deviceState === 'ON' ? 'snowflake-melt' : 'snowflake';

        case DeviceType.fan:
            return deviceState === 'ON' ? 'ceiling-fan-light' : 'ceiling-fan';

        case DeviceType.refridgrator:
            return 'fridge-outline';

        case DeviceType.tv:
            return deviceState === 'ON' ? 'tv' : 'tv-off';
    
        default:
            return '';
    }
}

export const GetDeviceIcon = device => {
    const deviceIconName = getDeviceIconName(device.device.type, device.device.state);
    const deviceColor = device.device.state === 'ON' ? '#e52676' : 'black';
    return (
        device.device.type === DeviceType.tv ?
        <MaterialIcons name={deviceIconName} size={40} color="black" style={[styles.deviceIcon]}/>
        :
        <MaterialCommunityIcons name={deviceIconName} size={40} color={deviceColor} style={[styles.deviceIcon]}/>
    )
}


const RoomDetail = ({route, navigation}) => {

    const { room } = route.params;

    useEffect(() => {
        navigation.setOptions({title: room.room.name}); 
    }, []);

    const roomStatCircleSize = 150;

  return (
      <View style={[globalStyles.flexStart, globalStyles.vCenter, globalStyles.flex1]}>

        <View style={[globalStyles.flex2, globalStyles.flexRow, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.fullWidth]}>

            <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>
            <AnimatedCircularProgress
              size={roomStatCircleSize}
              width={roomStatCircleSize / 10}
              fill={room.room.tempreature * 100 / 60}
              rotation={0}
              tintColor="#1bbb76"
              duration={1000}
              backgroundColor='#e3e3dc'>
              {
                (fill) => (
                  <SafeAreaView>
                  <View style={[styles.tempreatureInner, globalStyles.flexCenter, globalStyles.vCenter, globalStyles.flexRow, globalStyles.relative]}>
                    <Text style={[styles.tempreatureText]}>{room.room.tempreature}</Text>
                    <MaterialCommunityIcons name="temperature-celsius" size={20} color="black" />
                  </View>
                  <View>
                    <Text style={[globalStyles.lightSmallText, styles.statName]}>tempreature</Text>
                  </View>
                  </SafeAreaView>
                )
              }
            </AnimatedCircularProgress>
            </View>

            <View style={[globalStyles.flex1, globalStyles.flexCenter, globalStyles.vCenter]}>
            <AnimatedCircularProgress
              size={roomStatCircleSize}
              width={roomStatCircleSize / 10}
              fill={room.room.humidity}
              rotation={0}
              tintColor="#5579f1"
              duration={1000}
              backgroundColor='#e3e3dc'>
              {
                (fill) => (
                  <SafeAreaView>
                    <View style={[globalStyles.flexCenter, globalStyles.vCenter, globalStyles.flexRow, globalStyles.relative]}>
                    <Text style={[styles.tempreatureText]}>{room.room.humidity}</Text>
                    <Text style={[styles.tempreatureTextNormal]}>%</Text>
                    </View>
                    <View>
                      <Text style={[globalStyles.lightSmallText, styles.statName]}>humidity</Text>
                    </View>
                  </SafeAreaView>
                )
              }
            </AnimatedCircularProgress>
            </View>
        </View>

        <View style={[globalStyles.flex6, globalStyles.fullWidth, globalStyles.flexCenter, globalStyles.vCenter]}>
            <Text style={[globalStyles.mediumTitle, styles.deviceList]}>Devices in {room.room.name}</Text>
            <Devices room={room.room}/>
        </View>

      </View>
  );
};

export default RoomDetail;

const styles = StyleSheet.create({
  deviceList: {
    paddingLeft: 15
  },
  tempreatureOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  tempreatureText: {
    fontSize: 40,
    fontFamily: 'Inter_700Bold',
    whiteSpace: 'nowrap',
  },
  tempreatureTextNormal: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    whiteSpace: 'nowrap',
    paddingLeft: 3
  },
  nameText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16
  },
  statName: {
    textAlign: 'center'
  },
  deviceStateText: {
    fontFamily: 'Baloo2_400Regular',
    fontSize: 15
  },
  device: {
    padding: 15,
    borderRadius: 15,
    height: 125,
    width: 170,
    marginVertical: 10,
    marginHorizontal: 10
  },
  deviceIcon: {
    padding: 7,
    // borderRadius: 20,
    // overflow: 'hidden',
    // backgroundColor: '#fff'
  }

});
