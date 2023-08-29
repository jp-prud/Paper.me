import {rest} from 'msw';

import {BASE_URL} from '../../src/services/utils/HttpClient';

export const handlers = [
  rest.get(`${BASE_URL}shows/:showId/episodes`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json({}));
  }),
];
