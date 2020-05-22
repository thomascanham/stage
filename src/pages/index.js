import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  img {
    max-width: 100%;
    border: 5px solid rebeccapurple;
  }
`;

const IndexPage = ({ data }) => {

  const { welcomeHeading, welcomeParagraph, mainHeading, description, heroImage } = data.markdownRemark.frontmatter;
  console.log(heroImage)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{welcomeHeading}</h1>
      <h3 dangerouslySetInnerHTML={{ __html: mainHeading }}></h3>
      <p>{description}</p>
      <p>{welcomeParagraph}</p>
      <p>Now go build something great.</p>
      <ImgWrapper>
        <Img fluid={heroImage.childImageSharp.fluid} />
      </ImgWrapper>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
 query homePage{
  markdownRemark {
    frontmatter {
      welcomeHeading
      welcomeParagraph
      mainHeading
      description
      heroImage {
        childImageSharp {
          fluid (maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
 }
`
