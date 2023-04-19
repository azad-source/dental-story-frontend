import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { AxiosHeaders, Method } from 'axios';

export type BaseQueryFnType = BaseQueryFn<
    { url: string; method: Method; body?: any; params?: any; headers?: AxiosHeaders },
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
>;

export type BuildType = EndpointBuilder<BaseQueryFnType, string, 'api'>;
