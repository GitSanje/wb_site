"use server"
import { request, gql } from 'graphql-request'

const endpoint = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`
export const getHeroInfo = async() => {
    const query = gql`
  query GetHeroSection {
    page(id: "home", idType: URI) {
      heroSection {
        heroTitle
        heroImage {
          node {
            sourceUrl
           
          }
        }
      }
    }
  }
`
  const data = await request(endpoint, query) as any
 const hero = data.page.heroSection 
  const imageUrl = hero.heroImage?.node?.sourceUrl ?? ''
  const herotitle = hero.heroTitle ?? ''
  return {
    imageUrl,
    herotitle
  }


}




export async function fetchDestinations() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/destination?_embed`, {
    next: { revalidate: 60 }, // optional: revalidate cache every 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch destinations');

  const data = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    name: item.title.rendered,
    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
  }));
}
