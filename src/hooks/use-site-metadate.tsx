import { graphql, useStaticQuery} from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query MyQuery {
          site {
              siteMetadata {
                  title
                  description
                  siteUrl
              }
          }
          shopifyProduct {
              id
              title
              vendor
          }
          products: allShopifyProduct {
              nodes {
                  featuredMedia {
                      preview {
                          image {
                              gatsbyImageData
                          }
                      }
                  }
                  description
                  title
                  tags
              }
          }
      }
  `)

    console.log(data, 'data-1---')

    return data.site.siteMetadata;
}