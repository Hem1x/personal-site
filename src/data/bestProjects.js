import {
  movieHub,
  neuralNet,
  shipTracker,
  smartSpend,
} from '../../public/images/projects';

export const bestProjects = [
  {
    title: 'Фронтенд работы нейронной сети по распознованию объектов',
    img: neuralNet,
    summary:
      'Приложение помогает пользователям использовать камеру телефона или веб-камеру для определения делатей с помощьью ИИ прям в режиме real-time. Также имеется возможность подгрузки любых изображений (файл самостоятельно сжимается) и нейросеть сама определит на фотографии область и саму деталь',
    link: 'https://hakaton-22-09.vercel.app/',
    githubLink: 'https://github.com/Hem1x/hakaton_22_09',
    type: '#вау',
  },
  {
    title: 'Агрегатор фильмов',
    img: movieHub,
    summary:
      'Веб-приложение для истинных ценителей кинематографа, предоставляющее обширную базу данных фильмов, удобные инструменты для поиска, фильтрации и организации вашего кинопросмотра.',
    link: 'https://movie-hub-kohl.vercel.app/',
    githubLink: 'https://github.com/Hem1x/movie-hub',
    type: '#лучшее',
  },
  {
    title: 'Картографическое приложение',
    img: shipTracker,
    summary:
      'Цифровой сервис для формирования графика работы ледокольного и транспортного флота на Северном морском пути с горизонтом планирования один месяц',
    link: 'https://ships-map.vercel.app/',
    githubLink: 'https://github.com/Hem1x/ships-map',
    type: '#великолепно',
  },
  {
    title: 'Финансовое приложение',
    img: smartSpend,
    summary:
      'Приложение помогает пользователям отслеживать свои доходы и расходы, устанавливать финансовые цели и получать рекомендации по экономии и инвестированию, может помочь людям лучше управлять своими финансами.',
    link: 'https://smart-spend-pi.vercel.app/',
    githubLink: 'https://github.com/Hem1x/smart-spend',
    type: '#круто',
  },
];
