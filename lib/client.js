import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//connects to sanity client
export const client = sanityClient(
    {
        projectId: '1qofj2in',
        dataset: 'production',
        apiVersion: '2022-10-07',
        useCdn: true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    }
)
// This helper will by default respect any crops/hotspots specified in the Sanity content provided to it. 
const builder = imageUrlBuilder(client)

//gets the image url
export const urlFor = (source) => builder.image(source)