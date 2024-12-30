// src/data/mockArticles.ts

export interface Article {
    id: number;
    title: string;
    description?: string;
    author: string;
    time: string;
    tags: { text: string; trend?: number }[];
}

export const mockArticles: Article[] = [
    { 
        id: 1, 
        title: 'Rocket Lab Shares Surge After Successful Test of Reusable Booster Technology', 
        description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.', 
        author: 'Cameron Bates', 
        time: '3 hours ago', 
        tags: [
            { text: 'RLB', trend: +2.3 },
            { text: 'Defense' },
        ],
    },
    { 
        id: 2, 
        title: 'Purple Innovation to Roll Out Adjustable Smart Mattress', 
        author: 'Kevin Hua', 
        time: '1 hour ago', 
        tags: [
            { text: 'PRPL', trend: +1.2 },
            { text: 'Retail' },
        ],
    },
    { 
        id: 3, 
        title: 'Generali Insurance Explores Sale of Technology Platform to Rival Insurer', 
        author: 'Collin Godert', 
        time: '54 minutes ago', 
        tags: [
            { text: 'GNLI', trend: +2.3 },
            { text: 'Finance' },
        ],
    },
    { 
        id: 4, 
        title: 'FuelCell Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
        description: 'The partnership will focus on developing advanced energy solutions using FuelCell Energy’s solid oxide electrolysis hydrogen platform and KHNP’s nuclear power plants, following all regulations.', 
        author: 'Matt Carpenter', 
        time: '4 hours ago', 
        tags: [
            { text: 'FLCL', trend: -0.4 },
            { text: 'Energy' },
        ],
    },
    { 
        id: 5, 
        title: 'Kaleyra Teams Up With Tesla to Enhance AWD Solutions', 
        description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
        author: 'Aida Hill', 
        time: '2 hours ago', 
        tags: [
            { text: 'KLYR', trend: +2.4 },
            { text: 'TSLA', trend: -1.4 },
            { text: 'Tech' },
        ],
    },
    { 
        id: 6, 
        title: 'Myers Industries Reports Record Sales for Plastic Storage Solutions', 
        description: 'Tom Steyer has made a significant real estate investment in New Jersey.', 
        author: 'Adrian Peterson', 
        time: '6 hours ago', 
        tags: [
            { text: 'RIV', trend: +0.8 },
            { text: 'Manufacturing & Logistics' },
        ],
    },
    { 
        id: 7, 
        title: 'Five Point Holdings Gains Approval for Major California Redevelopment Project', 
        description: 'Rising inflation in the Eurozone is putting pressure on the ECB\'s monetary policies.', 
        author: 'Finvera Newsroom', 
        time: '2 mins ago', 
        tags: [
            { text: 'Interest Rates' },
            { text: 'Inflation' },
        ],
    },
    { 
        id: 8, 
        title: 'GrowGeneration Acquires Hydroponics Retail Chain to Boost West Coast Presence', 
        description: 'UBS analysts attribute Tesla\'s recent stock rally to market sentiment rather than fundamental changes.', 
        author: 'Kevin Hua', 
        time: '12 minutes ago', 
        tags: [
            { text: 'TSLA', trend: +1.9  },
            { text: 'Auto' },
        ],
    },
    { 
        id: 9, 
        title: 'Nautilus Biotechnology to Expand Automated Proteomics Lab Network', 
        description: 'Rivian secures a substantial loan to boost its electric vehicle production capabilities.', 
        author: 'Medical Insights', 
        time: '25 minutes ago', 
        tags: [
            { text: 'RIV', trend: +2.1  },
            { text: 'Auto' },
        ],
    },
    { 
        id: 10, 
        title: 'Carpenter Technology Adds Advanced Alloys Line to Support EV Battery Makers', 
        description: 'A new public company is making significant investments in Solana.', 
        author: 'Finvera Newsroom', 
        time: '5 hours ago', 
        tags: [
            { text: 'Stocks' },
            { text: 'Small Cap' },
        ],
    },
    { 
        id: 11, 
        title: 'Moog Inc. Develops Advanced Actuators for Fighter Jets', 
        description: 'FuelCell Energy and KHNP are working together to address South Korea\'s hydrogen energy requirements.', 
        author: 'Finvera Newsroom', 
        time: '37 minutes ago', 
        tags: [
            { text: 'Energy' },
            { text: 'Hydrogen' },
        ],
    },
    { 
        id: 12, 
        title: 'UK Inflation Dips Significantly, Paving The Way For Rate Cuts', 
        description: 'The UK sees a significant drop in inflation, potentially leading to future rate cuts.', 
        author: 'Market Watch', 
        time: '51 minutes ago', 
        tags: [
            { text: 'Inflation' },
            { text: 'Economy' },
        ],
    },
    { 
        id: 13, 
        title: 'FuelCell Energy Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
        description: 'FuelCell Energy and KHNP are working together to address South Korea\'s hydrogen energy requirements.', 
        author: 'Market Watch', 
        time: '58 minutes ago', 
        tags: [
            { text: 'Energy' },
            { text: 'Hydrogen' },
        ],
    },
    { 
        id: 14, 
        title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
        description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
        author: 'Market Watch', 
        time: '2 hours ago', 
        tags: [
            { text: 'AI' },
            { text: 'Technology' },
        ],
    },
    { 
        id: 15, 
        title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
        description: 'A large protest in Barcelona highlights the city\'s housing crisis and rising rents.', 
        author: 'Market Watch', 
        time: '3 hours ago', 
        tags: [
            { text: 'Housing' },
            { text: 'Protest' },
        ],
    },
    { 
        id: 16, 
        title: 'Klarna CEO says buy now, pay later is used by shoppers who otherwise avoid credit', 
        description: 'Klarna\'s CEO discusses the popularity of buy now, pay later services among credit-averse shoppers.', 
        author: 'Market Watch', 
        time: '3 hours ago', 
        tags: [
            { text: 'Finance' },
            { text: 'Credit' },
        ],
    },
    { 
        id: 17, 
        title: 'Man Accidentally Threw Away Hard Drive Containing 8,000 Bitcoins Worth A Billion Dollars', 
        description: 'A man mistakenly disposed of a hard drive containing a fortune in Bitcoin.', 
        author: 'Market Watch', 
        time: '4 hours ago', 
        tags: [
            { text: 'Bitcoin' },
            { text: 'Cryptocurrency' },
        ],
    },
    { 
        id: 18, 
        title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
        description: 'A large protest in Barcelona highlights the city\'s housing crisis and rising rents.', 
        author: 'Market Watch', 
        time: '5 hours ago', 
        tags: [
            { text: 'Housing' },
            { text: 'Protest' },
        ],
    },
    { 
        id: 19, 
        title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', 
        description: 'Tom Steyer has made a significant real estate investment in New Jersey.', 
        author: 'Market Watch', 
        time: '5 hours ago', 
        tags: [
            { text: 'Real Estate' },
            { text: 'Investment' },
        ],
    },
    { 
        id: 20, 
        title: 'Meta faces trial in FTC case aiming to undo Instagram merge', 
        description: 'Meta is set to face a trial as the FTC seeks to reverse its acquisition of Instagram.', 
        author: 'Bob Brown', 
        time: '21 mins ago', 
        tags: [
            { text: 'META', trend: +1.2 },
            { text: 'FTC' },
            { text: 'Technology' },
        ],
    },
    { 
        id: 21, 
        title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
        description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
        author: 'Finvera Newsroom', 
        time: '21 mins ago', 
        tags: [
            { text: 'AI' },
            { text: 'Technology' },
        ],
    },
    { 
        id: 22, 
        title: 'Bitcoin Surges as Institutional Investors Pile In', 
        description: 'Bitcoin prices surge as more institutional investors enter the market.', 
        author: 'Alice Johnson', 
        time: '10 mins ago', 
        tags: [
            { text: 'Bitcoin', trend: +5.0 },
            { text: 'Cryptocurrency' },
        ],
    },
    { 
        id: 23, 
        title: 'Amazon Announces New Drone Delivery Service', 
        description: 'Amazon reveals its latest innovation in delivery services with the introduction of drones.', 
        author: 'Michael Lee', 
        time: '15 mins ago', 
        tags: [
            { text: 'Amazon', trend: +2.3 },
            { text: 'Technology' },
        ],
    },
    { 
        id: 24, 
        title: 'Apple Unveils Latest iPhone Model with Advanced Features', 
        description: 'Apple introduces its newest iPhone model, featuring cutting-edge technology.', 
        author: 'Sarah Connor', 
        time: '20 mins ago', 
        tags: [
            { text: 'Apple', trend: +1.8 },
            { text: 'Technology' },
        ],
    },
    { 
        id: 25, 
        title: 'Google AI Achieves Breakthrough in Quantum Computing', 
        description: 'Google\'s AI team announces a major breakthrough in quantum computing technology.', 
        author: 'David Kim', 
        time: '25 mins ago', 
        tags: [
            { text: 'Google', trend: +3.5 },
            { text: 'Technology' },
        ],
    },
    { 
        id: 26, 
        title: 'Microsoft Acquires Gaming Company for $7.5 Billion', 
        description: 'Microsoft expands its gaming portfolio with a significant acquisition.', 
        author: 'Emma Watson', 
        time: '30 mins ago', 
        tags: [
            { text: 'Microsoft', trend: +2.0 },
            { text: 'Gaming' },
        ],
    },
    { 
        id: 27, 
        title: 'Netflix Expands into Live Sports Streaming', 
        description: 'Netflix ventures into live sports streaming, broadening its content offerings.', 
        author: 'Chris Evans', 
        time: '35 mins ago', 
        tags: [
            { text: 'Netflix', trend: +1.7 },
            { text: 'Entertainment' },
        ],
    },
    { 
        id: 28, 
        title: 'Tesla Unveils New Electric Truck Model', 
        description: 'Tesla introduces its latest electric truck model, showcasing advanced features.', 
        author: 'Elon Musk', 
        time: '40 mins ago', 
        tags: [
            { text: 'Tesla', trend: +2.5 },
            { text: 'Auto' },
        ],
    },
    { 
        id: 29, 
        title: 'Facebook Faces Backlash Over Privacy Concerns', 
        description: 'Facebook is under scrutiny for its handling of user privacy.', 
        author: 'Mark Zuckerberg', 
        time: '45 mins ago', 
        tags: [
            { text: 'Facebook', trend: -1.2 },
            { text: 'Technology' },
        ],
    },
    { 
        id: 30, 
        title: 'Uber Launches Self-Driving Car Service in Major Cities', 
        description: 'Uber rolls out its self-driving car service in several major cities.', 
        author: 'Travis Kalanick', 
        time: '50 mins ago', 
        tags: [
            { text: 'Uber', trend: +1.9 },
            { text: 'Auto' },
        ],
    },
    { 
        id: 31, 
        title: 'Spotify Introduces New Podcast Subscription Service', 
        description: 'Spotify launches a new subscription service for podcast enthusiasts.', 
        author: 'Daniel Ek', 
        time: '55 mins ago', 
        tags: [
            { text: 'Spotify', trend: +1.4 },
            { text: 'Entertainment' },
        ],
    }
];
