import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown): prismic.Client {
  const endpoint = prismic.getEndpoint('dahoralinkbio')

  const client = prismic.createClient(
    endpoint,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )

  return client
}