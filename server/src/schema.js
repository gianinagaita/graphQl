const { gql } = require('apollo-server');
const typeDefs = gql`

 type Query {
 "Query defined to get tracks array for the homepage grid"
 tracksForHome: [Track!]!   
 }
 
 
 " A track is a group of modules that teaches about a specific topic"
type Track {
" The unique identifier that is mandatory"
id: ID!
" The title for a track that is mandatory"
title: String!
" The author for a track that is mandatory"
author: Author!
" The thumbnail for a track that is optional"
thumbnail: String
" The length for this specific track that is optional"
length: Int
" The moduleCount that is also optional for this specific type"
modulesCount: Int
}
 "The Author for a complete track"
type Author {
"Unique identifier"
id: ID!
"Mandatory field for this type"
name: String!
"Optional parameter"
photo: String
}
`;
module.exports = typeDefs;
