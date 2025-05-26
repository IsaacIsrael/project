import { http, HttpResponse } from 'msw';

import { factoryHttpResponseResolverMock } from '@test-utils';

export const openUrlHandlerMockError = factoryHttpResponseResolverMock<never, { url: string }, never>(() =>
  HttpResponse.error(),
);
export const openUrlHandlerError = http.post('http://localhost:8081/open-url', openUrlHandlerMockError);

export const openUrlHandlerMock = factoryHttpResponseResolverMock<never, { url: string }, never>(
  () => new HttpResponse(null, { status: 200 }),
);
const openUrlHandler = http.post<never, { url: string }, never>('http://localhost:8081/open-url', openUrlHandlerMock);
export default openUrlHandler;
