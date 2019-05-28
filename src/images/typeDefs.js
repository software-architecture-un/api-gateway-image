export const imagesTypeDef = `
type Image {
    id: Int
    imageableid: Int
    imageabletype: Int
    base64: String
}
input ImageInput {
    content: String
    imageableid: Int
    imageabletype: Int
}
type ImageResponse {
    content: Image!
    message: String!
}
type ImagesResponse {
    content: [Image]!
    message: String!
}`;

export const imagesQueries = `
    allImages: ImagesResponse
    imageById(id: Int!): ImageResponse
    imageByType(imageabletype: Int!): ImagesResponse
    imageByOwner(imageableid: Int!): ImagesResponse
    imageByTypeAndOwner(imageabletype: Int!, imageableid: Int!): ImagesResponse
`;

export const imagesMutations = `
    createImage(image: ImageInput!): ImageResponse
    deleteImage(id: Int!): ImageResponse
`;
