import { customAlphabet } from 'nanoid';
import { name, internet, random, image, datatype, lorem, date } from 'faker';
import { AuthInfo, CommentGet, Film } from '../types/data';
import { GENRES } from '../const';
const nanoid = customAlphabet('1234567890', 50);

export const CreateFakeFilm = (): Film => ({
  id: parseInt(nanoid(), 10),
  name: name.firstName(),
  description: lorem.sentences(datatype.number(3)),
  rating: datatype.float({ max: 10 }),
  director: name.firstName(),
  starring: Array(10).fill(null).map((item) => item = name.lastName()),
  genre: random.arrayElement(GENRES),
  released: datatype.number({ min: 1900, max: 2021 }),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  previewVideoLink: internet.url(),
  scoresCount: datatype.number(500),
  isFavorite: datatype.boolean(),
  runTime: datatype.number(300),
});

export const CreateFakeComment = (): CommentGet => ({
  id: parseInt(nanoid(), 10),
  user: {
    id: parseInt(nanoid(), 10),
    name: name.firstName(),
  },
  rating: datatype.float({ max: 10 }),
  comment: lorem.sentences(datatype.number(5)),
  date: date.past().toString(),
});

export const fakeAuthor = (): AuthInfo => ({
  id: parseInt(nanoid(), 10),
  email: internet.email(),
  name: internet.userName(),
  avatarUrl: image.imageUrl(),
  token: internet.password(),
});

export const fakeComments = new Array(datatype.number(9)).fill(null).map(CreateFakeComment);
