import Heineken from '../images/sponsors/heineken-logo.png';
import Levis from '../images/sponsors/Levis_logo.png';
import NigerianBreweries from '../images/sponsors/ng-nb-logo.webp';
import TurkishAirlines from '../images/sponsors/Turkish_Airlines-Logo.png';
import Walmart from '../images/sponsors/Walmart-Logo.png';
import Meta from '../images/sponsors/Meta-Logo.png';
import ProcterGamble from '../images/sponsors/P&G_logo.png';

interface Sponsors {
    title: string;
    imgSrc: string;
    alt: string;
}

const SponsorsData: Sponsors[] = [
    {
        title: "Heineken",
        imgSrc: Heineken,
        alt:"Heineken Logo",
    },
    {
        title: "Levis",
        imgSrc: Levis,
        alt:"Levis Logo",
    },
    {
        title: "Nigerian Breweries",
        imgSrc: NigerianBreweries,
        alt:"Nigerian Breweries Logo",
    },
    // {
    //     title: "Turkish Airlines",
    //     imgSrc: TurkishAirlines,
    //     alt:"Turkish Airlines Logo",
    // },
    {
        title: "Walmart",
        imgSrc: Walmart,
        alt:"Walmart Logo",
    },
    {
        title: "Meta",
        imgSrc: Meta,
        alt:"Meta Logo",
    },
    // {
    //     title: "Procter and Gamble",
    //     imgSrc: ProcterGamble,
    //     alt:"Procter and Gamble Logo",
    // },
];

export default SponsorsData;
