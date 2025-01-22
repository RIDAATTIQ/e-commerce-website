import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity Client Configuration
export const client = createClient({
  projectId: '61018pjj', // Aapka Sanity Project ID
  dataset: 'production', // Dataset
  apiVersion: '2021-03-25', // Sanity API version
  useCdn: true, // Use CDN for faster response
});

// Image URL Builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}