import type { DefaultBodyType, HttpResponseResolver, PathParams, StrictRequest } from 'msw';

type MockHandler<
  Params extends PathParams<keyof Params> = PathParams,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
  ResponseBodyType extends DefaultBodyType = DefaultBodyType,
> = jest.MockedFunction<HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>> & {
  getMockBody: (callIndex?: number) => Promise<RequestBodyType | undefined>;
  getMockMethod: (callIndex?: number) => string | undefined;
};

export default function factoryHttpResponseResolverMock<
  Params extends PathParams<keyof Params> = PathParams,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
  ResponseBodyType extends DefaultBodyType = DefaultBodyType,
>(
  rawHandler: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>,
): MockHandler<Params, RequestBodyType, ResponseBodyType> {
  const requests: StrictRequest<RequestBodyType>[] = [];

  const handler: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType> = (values) => {
    requests.push(values.request);
    return rawHandler(values);
  };

  const mock = jest.fn(handler) as unknown as MockHandler<Params, RequestBodyType, ResponseBodyType>;

  mock.getMockBody = async (index = requests.length - 1) => {
    const request = requests[index];
    if (!request) {
      return undefined;
    }
    return await request.json();
  };

  mock.getMockMethod = (index = requests.length - 1) => {
    const request = requests[index];
    if (!request) {
      return undefined;
    }
    return request.method;
  };

  return mock;
}
