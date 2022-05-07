export const getImage = (fileName) => `/images/${fileName}`;
export const getAudio = (fileName) => `/audio/${fileName}`;

export const albums = [
    {
        id: 1,
        slug: 'melodies',
        name: 'Melodies',
        performer: 'VANVI',
        image: getImage('cover.jpg'),
        tracks: [
            {id: '1', fileName: getAudio('melodies/vanvi_melody_1.mp3'), title: 'MELODY 1', timestamp: 1651603878040 },
            {id: '2', fileName: getAudio('melodies/vanvi_melody_2.mp3'), title: 'MELODY 2', timestamp: 1651603878040 },
        ]
    },
    {
        id: 0,
        slug: 'soundtracks',
        name: 'Soundtracks',
        performer: 'VANVI',
        image: getImage('cover.jpg'),
        tracks: [
            {id: '1', fileName: getAudio('soundtracks/vanvi_soundtrack_1.mp3'), title: 'SOUNDTRACK 1', timestamp: 1651603878040 },
            {id: '2', fileName: getAudio('soundtracks/vanvi_soundtrack_2.mp3'), title: 'SOUNDTRACK 2', timestamp: 1651603878040 },
            {id: '3', fileName: getAudio('soundtracks/vanvi_soundtrack_3.mp3'), title: 'SOUNDTRACK 3', timestamp: 1651603878040 },
            {id: '4', fileName: getAudio('soundtracks/vanvi_soundtrack_4.mp3'), title: 'SOUNDTRACK 4', timestamp: 1651603878040 },
            {id: '5', fileName: getAudio('soundtracks/vanvi_soundtrack_5.mp3'), title: 'SOUNDTRACK 5', timestamp: 1651603878040 },
            {id: '6', fileName: getAudio('soundtracks/vanvi_soundtrack_6.mp3'), title: 'SOUNDTRACK 6', timestamp: 1651603878040 },
            {id: '7', fileName: getAudio('soundtracks/vanvi_soundtrack_7.mp3'), title: 'SOUNDTRACK 7', timestamp: 1651603878040 },
            {id: '8', fileName: getAudio('soundtracks/vanvi_soundtrack_8.mp3'), title: 'SOUNDTRACK 8', timestamp: 1651603878040 },
        ]
    }
]