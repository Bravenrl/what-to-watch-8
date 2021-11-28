import { customAlphabet } from 'nanoid';
import { name, internet, random, image, datatype } from 'faker';
import { Film } from '../types/data';
import { GENRES } from '../const';
const nanoid = customAlphabet('1234567890', 50);

export const fakeFilm: Film = {
  id: parseInt(nanoid(), 10),
  name: name.firstName(),
  description: random.words(10),
  rating: datatype.number(10),
  director: name.firstName(),
  starring: Array(10).fill(null).map((item) => item = name.lastName()),
  genre: random.arrayElement(GENRES),
  released: datatype.number({min:1900, max: 2021}),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  previewVideoLink: internet.url(),
  scoresCount: datatype.number(500),
  isFavorite: datatype.boolean(),
  runTime: datatype.number(300),
};
