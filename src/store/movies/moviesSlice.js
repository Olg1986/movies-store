import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    tagTypes: ['Movies'],
    baseQuery: fetchBaseQuery({baseUrl: ' http://localhost:3001/'}),
    endpoints: (build) => ({
        getCards: build.query({
            query: (type = '') => `movies?${type && `type_like=${type}`}`,
            providesTags: (result) => ['Movies'],
        }),
        getFilter: build.query({
            query: (title = '') => `movies?${title && `title_like=${title}`}`,
            providesTags: (result) => ['Movies'],
        })

    })
})
export const {useGetCardsQuery, useGetFilterQuery} = moviesApi;
