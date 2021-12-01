import { customAlphabet } from 'nanoid';
import { name, internet, random, image, datatype, lorem, date } from 'faker';
import { AuthInfo, CommentGet, Film } from '../types/data';
import { GENRES } from '../const';
const nanoid = customAlphabet('1234567890', 50);
const LINKS = [
  {
    previewImage: 'https://8.react.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    previewImage: 'https://8.react.pages.academy/static/film/preview/legend.jpg',
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    previewImage: 'https://8.react.pages.academy/static/film/preview/aviator.jpg',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    previewImage: 'https://8.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    previewImage: 'https://8.react.pages.academy/static/film/preview/orlando.jpg',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
];

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
  previewImage: random.arrayElement(LINKS).previewImage,
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: random.arrayElement(LINKS).videoLink,
  previewVideoLink: random.arrayElement(LINKS).previewImage,
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
