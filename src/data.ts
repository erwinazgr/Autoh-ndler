export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
  gallery: string[];
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
  };
  description: string;
}

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    price: 'Auf Anfrage',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503376713251-850f22167055?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376713251-850f22167055?q=80&w=2000&auto=format&fit=crop'
    ],
    specs: {
      power: '525 PS',
      acceleration: '3.2s 0-100 km/h',
      topSpeed: '296 km/h',
      engine: '4.0L B6 Sauger',
    },
    description: 'Der Porsche 911 GT3 RS ist kompromisslos auf Performance ausgelegt. Mit seinem hochdrehenden Saugmotor und der ausgefeilten Aerodynamik bringt er Rennsporttechnologie direkt auf die Straße. Ein Meisterwerk der Ingenieurskunst für puristisches Fahrvergnügen.'
  },
  {
    id: '2',
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2023,
    price: '€ 285.000',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop'
    ],
    specs: {
      power: '720 PS',
      acceleration: '2.9s 0-100 km/h',
      topSpeed: '340 km/h',
      engine: '3.9L V8 Biturbo',
    },
    description: 'Der F8 Tributo ist eine Hommage an den stärksten V8-Motor in der Geschichte von Ferrari. Er vereint atemberaubendes Design mit extremer Leistung und bietet ein unvergleichliches Fahrerlebnis, das die Grenzen der Physik neu definiert.'
  },
  {
    id: '3',
    brand: 'Aston Martin',
    model: 'DBS Superleggera',
    year: 2022,
    price: '€ 245.000',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop'
    ],
    specs: {
      power: '725 PS',
      acceleration: '3.4s 0-100 km/h',
      topSpeed: '340 km/h',
      engine: '5.2L V12 Biturbo',
    },
    description: 'Britische Eleganz trifft auf brachiale Gewalt. Der DBS Superleggera ist der ultimative Super GT. Seine muskulöse Karosserie aus Kohlefaser und der gewaltige V12-Motor machen ihn zu einer Ikone des modernen Automobildesigns.'
  },
  {
    id: '4',
    brand: 'Mercedes-AMG',
    model: 'GT Black Series',
    year: 2021,
    price: '€ 395.000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop'
    ],
    specs: {
      power: '730 PS',
      acceleration: '3.2s 0-100 km/h',
      topSpeed: '325 km/h',
      engine: '4.0L V8 Biturbo',
    },
    description: 'Die Black Series ist die absolute Speerspitze von AMG. Mit dem stärksten AMG V8-Serienmotor aller Zeiten und einer Aerodynamik, die direkt aus dem Motorsport stammt, ist er ein kompromissloses Track-Tool mit Straßenzulassung.'
  }
];
