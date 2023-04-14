import dayjs from 'dayjs';
import { RoomColors } from '../global-styles';

export const TodayDate = () => {
    return dayjs().format('DD MMM YYYY');
}

export const CurrentUser = {
    name: 'Mike Walt'
}

export class Room {
    constructor(name, allDevices) {
        roomName = name,
        devices = allDevices;
    }
}

export class Device {
    constructor(name, desc, state, temp) {
        deviceName = name,
        description = desc,
        deviceState = state,  // on / off
        tempreature = temp;   // if applicable
    }
}

export const RoomType = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    bathroom: 'Bathroom',
    studyroom: 'Study Room',
    diningroom: 'Dining Room',
    office: 'Office Space'
}

export const DeviceType = {
    light: 'Light',
    aircon: 'Aircon',
    tv: 'tv',
    chimney: 'Chimney',
    gyser: 'Gyser',
    refridgrator: 'Refridgrator',
    fan: 'Fan',
    shower: 'Shower'
};

export const Rooms = [
    {
        room: {
            id: 'lr',
            name: 'Living Room',
            type: RoomType.living,
            color: RoomColors.living,
            tempreature: 20,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Side', state: 'ON', type: DeviceType.light },
                { name: 'Light Side', state: 'OFF', type: DeviceType.light },
                { name: 'Aircon', state: 'ON', tempreature: 21, type: DeviceType.aircon },
                { name: 'Smart TV', state: 'OFF', type: DeviceType.tv },
            ]
            },
    },

    {
        room: {
            id: 'kitchen',
            name: 'Kitchen',
            type: RoomType.kitchen,
            color: RoomColors.kitchen,
            tempreature: 26,
            humidity: 50,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Chimney', state: 'OFF', type: DeviceType.chimney },
                { name: 'Light Side', state: 'OFF', type: DeviceType.light },
                { name: 'Refridgrator', state: 'ON', tempreature: 5, type: DeviceType.refridgrator },
                { name: 'Gyser', state: 'OFF', type: DeviceType.gyser },
            ]
            },
    },

    {
        room: {
            id: 'masterbed',
            name: 'Master Bedroom',
            type: RoomType.bedroom,
            color: RoomColors.bedroom,
            tempreature: 19,
            humidity: 35,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Light Side', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'OFF', type: DeviceType.fan },
                { name: 'Aircon', state: 'ON', tempreature: 19, type: DeviceType.aircon },
                { name: 'Smart TV', state: 'OFF', type: DeviceType.tv },
            ]    
        },
    },

    {
        room: {
            id: 'bedroom2',
            name: 'Bedroom 2',
            type: RoomType.bedroom,
            color: RoomColors.bedroom,
            tempreature: 23,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Light Side', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'ON', type: DeviceType.fan },
                { name: 'Aircon', state: 'OFF', tempreature: 19, type: DeviceType.aircon },
                { name: 'Smart TV', state: 'ON', type: DeviceType.tv },
            ]    
        },
    },

    {
        room: {
            id: 'bedroom1',
            name: 'Bedroom Guest',
            type: RoomType.bedroom,
            color: RoomColors.bedroom,
            tempreature: 20,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Light Side', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'ON', type: DeviceType.fan },
                { name: 'Aircon', state: 'OFF', tempreature: 19, type: DeviceType.aircon },
                { name: 'Smart TV', state: 'ON', type: DeviceType.tv },
            ]
        },
    },

    {
        room: {
            id: 'masterbathroom',
            name: 'Master Bathroom',
            type: RoomType.bathroom,
            color: RoomColors.bathroom,
            tempreature: 25,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Gyser', state: 'ON', type: DeviceType.gyser, tempreature: 88 },
                { name: 'Rain Shower', state: 'OFF', type: DeviceType.shower },
            ]    
        },
    },

    {
        room: {
            id: 'dining',
            name: 'Dining Room',
            type: RoomType.diningroom,
            color: RoomColors.diningroom,
            tempreature: 24,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'OFF', type: DeviceType.fan },
                { name: 'Aircon', state: 'ON', tempreature: 22, type: DeviceType.aircon },
            ]    
        },
    },

    {
        room: {
            id: 'study',
            name: 'Study Room',
            type: RoomType.studyroom,
            color: RoomColors.studyroom,
            tempreature: 24,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'OFF', type: DeviceType.fan },
                { name: 'Aircon', state: 'ON', tempreature: 22, type: DeviceType.aircon },
            ]    
        },
    },

    {
        room: {
            id: 'office',
            name: 'Office @Home',
            type: RoomType.office,
            color: RoomColors.office,
            tempreature: 25,
            humidity: 45,
            devices: [
                { name: 'Light Main', state: 'ON', type: DeviceType.light },
                { name: 'Light Ceiling', state: 'OFF', type: DeviceType.light },
                { name: 'Celing Fan', state: 'OFF', type: DeviceType.fan },
                { name: 'Aircon', state: 'ON', tempreature: 22, type: DeviceType.aircon },
            ]    
        },
    },
];
