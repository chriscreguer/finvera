export interface MovingNow {
    id: number;
    company: string;
    ticker: { text: string; trend: number }[];
}

export const mockMovingNow: MovingNow[] = [
    { 
        id: 1, 
        ticker: [
            { text: 'FLCL', trend: +4.1 },
        ],
        company: 'Fuel Cell Industries', 

    },
    { 
        id: 2, 
        ticker: [
            { text: 'AGTC', trend: +3.3 },
        ],
        company: 'Applied Genetic Technologies', 

    },
    { 
        id: 3, 
        ticker: [
            { text: 'CIDM', trend: -2.3 },
        ],
        company: 'Cinedigm'

    }
];
