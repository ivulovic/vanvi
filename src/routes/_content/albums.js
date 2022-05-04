export const getImage = (fileName) => `/images/${fileName}`;
export const getAudio = (fileName) => `/audio/${fileName}`;

export const albums = [
    {
        id: 0,
        slug: 'garage',
        name: 'Garage',
        performer: 'VANVI',
        image: getImage('garage.jpg'),
        tracks: [
            {id: '1', fileName: getAudio('garage/vanvi_soundtrack_1.mp3'), title: 'SOUNDTRACK 1', timestamp: 1651603878040 },
            {id: '2', fileName: getAudio('garage/vanvi_soundtrack_2.mp3'), title: 'SOUNDTRACK 2', timestamp: 1651603878040 },
            {id: '3', fileName: getAudio('garage/vanvi_soundtrack_3.mp3'), title: 'SOUNDTRACK 3', timestamp: 1651603878040 },
            {id: '4', fileName: getAudio('garage/vanvi_soundtrack_4.mp3'), title: 'SOUNDTRACK 4', timestamp: 1651603878040 },
            {id: '5', fileName: getAudio('garage/vanvi_soundtrack_5.mp3'), title: 'SOUNDTRACK 5', timestamp: 1651603878040 },
            {id: '6', fileName: getAudio('garage/vanvi_soundtrack_6.mp3'), title: 'SOUNDTRACK 6', timestamp: 1651603878040 },
            {id: '7', fileName: getAudio('garage/vanvi_soundtrack_7.mp3'), title: 'SOUNDTRACK 7', timestamp: 1651603878040 },
            {id: '8', fileName: getAudio('garage/vanvi_soundtrack_8.mp3'), title: 'SOUNDTRACK 8', timestamp: 1651603878040 },
        ]
    }
]