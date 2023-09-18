import sanityClient from '@sanity/client';
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'cxwe6hj1',
  dataset: 'production',
  apiVersion: '2023-09-13',
  useCdn: true,
  token: 'skESQfpPrfBOcr44BUzSAkb6qDGeR8QetWvpRyezLatPDirf1HUyeA8O0JRIckeHz75ps1ACPgH9gDr4UK61pZ0GZxxke0FR0vBxgWaw5cLmCoX5CwiobXSnbWfHqD3Q5qPVN8uQNuYGXEjO9cfUEXce14OimLFksFKnaJLzM814rVGyTjth'
});

//export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}