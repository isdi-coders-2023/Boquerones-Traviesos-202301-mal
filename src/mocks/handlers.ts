import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.disneyapi.dev/character', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: 908,
            name: 'Cobra Bubbles',
            imageUrl:
              'https://static.wikia.nocookie.net/disney/images/5/55/Cobra_Bubbles_LAS.jpg',
            films: ['Lilo & Stitch', 'Stitch! The Movie', 'Leroy & Stitch'],
            tvShows: ['Lilo & Stitch: The Series', 'Stitch & Ai'],
          },
        ],
      })
    );
  }),
  rest.get(`https://api.disneyapi.dev/characters/${25}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: 25,
            name: 'Abu',
            imageUrl:
              'https://static.wikia.nocookie.net/disney/images/3/3f/Profile_-_Abu.png',
            films: [
              'Aladdin (film)',
              'The Return of Jafar',
              'Aladdin and the King of Thieves',
              'Disney Princess Enchanted Tales: Follow Your Dreams',
              'Aladdin (2019 film)',
            ],
            tvShows: [
              'Aladdin (TV series)',
              'Hercules (TV series)',
              'House of Mouse',
            ],
          },
        ],
      })
    );
  }),
];
