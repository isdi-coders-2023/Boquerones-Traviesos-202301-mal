import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.disneyapi.dev/character', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 908,
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
];
