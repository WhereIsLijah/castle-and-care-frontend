import Heineken from '../images/sponsors/heineken-logo.png';
import Levis from '../images/sponsors/Levis_logo.png';
import NigerianBreweries from '../images/sponsors/ng-nb-logo.webp';
import TurkishAirlines from '../images/sponsors/Turkish_Airlines-Logo.png';
import Walmart from '../images/sponsors/Walmart-Logo.png';
import Meta from '../images/sponsors/Meta-Logo.png';
import ProcterGamble from '../images/sponsors/P&G_logo.png';
import EA from '../images/sponsors/Ea-logo.png';
import Apple from '../images/sponsors/Apple-Logo.png';
import Adidas from '../images/sponsors/adidas-logo.png';
// import Nike from '../images/sponsors/Nike-logo.png';

interface Sponsors {
    title: string;
    imgSrc: string;
    alt: string;
}

const SponsorsData: Sponsors[] = [
    // {
    //     title: "Turkish Airlines",
    //     imgSrc: TurkishAirlines,
    //     alt:"Turkish Airlines Logo",
    // },
    {
        title: "Electronic Arts",
        imgSrc: EA,
        alt:"Electronic Arts Logo",
    },
    // {
    //     title: "Nike",
    //     imgSrc: Nike,
    //     alt:"Nike Logo",
    // },
    {
        title: "Heineken",
        imgSrc: Heineken,
        alt:"Heineken Logo",
    },
    {
        title: "Meta",
        imgSrc: Meta,
        alt:"Meta Logo",
    },
    {
        title: "Nigerian Breweries",
        imgSrc: NigerianBreweries,
        alt:"Nigerian Breweries Logo",
    },

    {
        title: "Walmart",
        imgSrc: Walmart,
        alt:"Walmart Logo",
    },
    {
        title: "Adidas",
        imgSrc: Adidas,
        alt:"Adidas Logo",
    },
    {
        title: "Levis",
        imgSrc: Levis,
        alt:"Levis Logo",
    },

    // {
    //     title: "Procter and Gamble",
    //     imgSrc: ProcterGamble,
    //     alt:"Procter and Gamble Logo",
    // },
];

export default SponsorsData;
