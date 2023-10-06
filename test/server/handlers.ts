import {rest} from 'msw';

import {BASE_URL} from '../../src/services/utils/HttpClient';
import {mockPostList, mockUser} from '../mocks';

export const handlers = [
  // POSTS
  rest.get(`${BASE_URL}posts`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(mockPostList));
  }),

  // USER
  rest.get(`${BASE_URL}users/me`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(mockUser));
  }),
];
