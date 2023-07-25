import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://opentdb.com/api.php",
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: ({ amount = 10, category = 9, difficulty = 'easy', type = 'multiple' }) =>
                `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`,
        }),
    }),
});
export const { useGetQuestionsQuery } = api;

