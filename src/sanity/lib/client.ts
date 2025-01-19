import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


export const client = createClient({
  projectId:"r1tsztin",
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skY4bxK1iArxUnf1GdGBLiD61Y72QnzUSRpgRgDRqoBCnUXLchoRgCHKaulQGxOwMO6AlmJgk06Dy0A37l52XLtSJqSsUqHZAa6vWS0AiFzzyOWejMwN2M6cVRjdKoKIOD4Fw1Eyt2zYRtQLqLp7DNREjrLIVYiiysTR8EE9ZlUb26JGups4",
})

