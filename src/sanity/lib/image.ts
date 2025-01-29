import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env'; // Ensure these values are correct

// Create a builder for generating image URLs
const builder = createImageUrlBuilder({ projectId, dataset });

// Generate URL for a given image source
export const urlFor = (source: SanityImageSource) => builder.image(source);
