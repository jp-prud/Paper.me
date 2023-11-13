import {BASE_URL} from '@services';
import {rest} from 'msw';

import {commentMock, postListMock, userMock} from '../mocks';

export const handlers = [
  // AUTH
  rest.post(`${BASE_URL}auth/signin`, (req, resp, ctx) => {
    return resp(
      ctx.status(200),
      ctx.json({
        email: 'jprudencio@mail.com',
        password: 'password',
      }),
    );
  }),

  // POSTS
  rest.get(`${BASE_URL}posts`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(postListMock));
  }),

  rest.get(`${BASE_URL}posts/:id`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(postListMock[0]));
  }),

  // COMMENTS
  rest.get(`${BASE_URL}comments/:id`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(commentMock));
  }),

  rest.post(`${BASE_URL}comments/:id`, (req, resp, ctx) => {
    return resp(ctx.status(201), ctx.json({}));
  }),

  // USER
  rest.get(`${BASE_URL}users/me`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(userMock));
  }),
];
