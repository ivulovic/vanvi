export const getImage = (fileName) => `/images/${fileName}`;
export const getAudio = (fileName) => `/audio/${fileName}`;

export const albums = [
    {
        id: 0,
        slug: 'garage',
        name: 'Garage',
        performer: 'VANVI',
        image: getImage('stars.jpg'),
        tracks: [
            {id: '', fileName: getAudio('stars/vanvi_spring_morning.mp3'), title: 'Spring Morning', timestamp: 1651603878040 },
        ]
    }
]