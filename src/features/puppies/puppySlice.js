import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. postPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => "players",
      transformResponse: (response) => response.data.players, 
      providesTags: ["Player"],
    }),
    getPuppy: build.query({
      query: (id) => (id ? `players/${id}` : "players"),
      transformResponse: (response) => response.data.player,
      providesTags: ["Player"],
    }),
    postPuppy: build.mutation({
      query: (player) => ({
        url: "players",
        method: "POST",
        body: player,
      }),
      invalidatesTags: ["Player"],
    }),
    deletePuppy: build.mutation({
      query: (id) => ({
        url: "players/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Player"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  usePostPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
