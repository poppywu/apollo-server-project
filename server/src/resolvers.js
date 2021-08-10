const resolvers = {
    Query:{
        //returns an array of Tracks
        tracksForHome: (_,__, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }, 
        // tracksForHomeFetch: async () => {
        //     const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        //     const res = await fetch(`${baseUrl}/tracks`);
        //     return res.json();
        //   },
    },
    Track:{
        author:({authorId},_,{dataSources})=>{
            return dataSources.trackAPI.getAuthor(authorId);
        }
        // author: async ({ authorId }, _, { dataSources }) => {
        //     const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        //     const res = await fetch(`${baseUrl}/author/${authorId}`);
        //     return res.json();
        //           }
    }
};
module.exports = resolvers;