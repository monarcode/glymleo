import chev from 'public/chev.png';
import gwagon from 'public/gwagon.png';
import porche from 'public/porche.png';
import toyota from 'public/toyota.png';

import mercedesC300 from 'public/cars/mercedes-benz-c300-2016.png';
import toyotaAvalon from 'public/cars/toyota-avalon-xle-plus-2018.png';
import toyotaHighlander from 'public/cars/2018-toyota.highlander.png';
import toyotalLandcruiser from 'public/cars/toyota-landcruiser-5-7.png';
import lexusLx570 from 'public/cars/lexus-lx570.png';
import mercedesGle from 'public/cars/mercedes-benz-gle350-2016.png';

export const cars = [
  {
    id: 1,
    name: '2016 Mercedes-Benz C300 (Sport)',
    price: '18,500,000',
    img: mercedesC300.src,
    hp: '241hp @ 5,550 rpm',
    engine: '2.0 L',
    trans: '7-speed shiftable automatic',
    mpg: '24/31 hwy',
  },
  {
    id: 2,
    name: '2018 Toyota Avalon XLE Plus',
    price: '14,500,000',
    img: toyotaAvalon.src,
    hp: '268hp @ 6,200 rpm',
    engine: '3.5 L',
    trans: '6-speed shiftable automatic',
    mpg: '21/30 hwy',
  },
  {
    id: 3,
    name: '2018 Toyota Highlander XLE',
    price: '16,000,000',
    img: toyotaHighlander.src,
    hp: '295hp @ 6,600 rpm',
    engine: '3.5 L',
    trans: '8-speed shiftable automatic',
    mpg: '20/26 hwy',
  },
  {
    id: 4,
    name: '2021 Toyota Landcruiser 5.7 VX',
    price: '178,000,000',
    img: toyotalLandcruiser.src,
    hp: '381 hp @ 5600 rpm',
    engine: '5.7 L',
    trans: '8-speed shiftable automatic',
    mpg: '13/17 hwy',
  },
  {
    id: 5,
    name: '2018 Lexus LX570 AWD',
    price: '57,000,000',
    img: lexusLx570.src,
    hp: '383hp @ 5,600 rpm',
    engine: '5.7 L',
    trans: '8-speed shiftable automatic',
    mpg: '',
  },
  {
    id: 6,
    name: '2016 Mercedes-Benz GLE-Class GLE 350',
    price: '23,800,000',
    img: mercedesGle.src,
    hp: '302hp @ 6,500 rpm',
    engine: '3.5 L',
    trans: '7-speed shiftable automatic',
    mpg: '18/24 hwy',
  },
];
