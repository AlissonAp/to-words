import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Real',
      plural: 'Reais',
      symbol: 'R$',
      fractionalUnit: {
        name: 'Centavo',
        plural: 'Centavos',
        symbol: '',
      },
    },
    texts: {
      and: 'E',
      minus: 'Menos',
      only: 'Somente',
      point: 'Ponto',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'Quadrilhão' },
      { number: 1000000000000, value: 'Trilão' },
      { number: 1000000000, value: 'Bilhão' },
      { number: 1000000, value: 'Milhão' },
      { number: 1000, value: 'Mil' },
      { number: 900, value: 'Novecentos' },
      { number: 800, value: 'Oitocentos' },
      { number: 700, value: 'Setecentos' },
      { number: 600, value: 'Seicentos' },
      { number: 500, value: 'Quinhentos' },
      { number: 400, value: 'Quatrocentos' },
      { number: 300, value: 'Trezentos' },
      { number: 200, value: 'Duzentos' },
      { number: 100, value: 'Cem' },
      { number: 90, value: 'Noventa' },
      { number: 80, value: 'Oitenta' },
      { number: 70, value: 'Setenta' },
      { number: 60, value: 'Sessenta' },
      { number: 50, value: 'Cinquuenta' },
      { number: 40, value: 'Quarenta' },
      { number: 30, value: 'Trinta' },
      { number: 20, value: 'Vinte' },
      { number: 19, value: 'Dezenove' },
      { number: 18, value: 'Dezoito' },
      { number: 17, value: 'Dezessete' },
      { number: 16, value: 'Dezesseis' },
      { number: 15, value: 'Quinze' },
      { number: 14, value: 'Quatorze' },
      { number: 13, value: 'Treze' },
      { number: 12, value: 'Doze' },
      { number: 11, value: 'Onze' },
      { number: 10, value: 'Dez' },
      { number: 9, value: 'Nove' },
      { number: 8, value: 'Oito' },
      { number: 7, value: 'Sete' },
      { number: 6, value: 'Seis' },
      { number: 5, value: 'Cinco' },
      { number: 4, value: 'Quatro' },
      { number: 3, value: 'Três' },
      { number: 2, value: 'Dois' },
      { number: 1, value: 'Um' },
      { number: 0, value: 'Zero' },
    ],
    exactWordsMapping: [],
  };
}
