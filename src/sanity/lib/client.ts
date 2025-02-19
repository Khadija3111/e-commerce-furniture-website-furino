import { createClient } from 'next-sanity'

import { apiVersion, dataset, } from '../env'


export const client = createClient({
  projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:process.env.SANITY_API_TOKEN,
})

