import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image';

const UL = styled.ul`
    list-style: none;
    margin: 0;

    p { line-height: 170%; }

    li { 
        margin: 5rem 0;
        padding: 3rem;
        border: 1px solid rgba(0,0,0,0.2);
    }

    li h3 { color: rebeccapurple; }

    li .quotes {
        color: grey;
        font-size: 40px;
    }
`;

const Hero = styled.div`
    .featured-image {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        color: white;
        display: block;
    }

    .hero-content { text-align: center; }
`;

const CallToActionButton = styled.button`
    display: block;
    margin: 2rem auto;
    padding: 1rem;
    color: #f2f2f2;
    background-color: #f65100;
    border: none;
    cursor: pointer;
`;

const CommentsPage = ({ data }) => {

    const { edges } = data.allFile
    const { fluid: bgImage } = data.file.childImageSharp;

    return (
        <Layout>
            <SEO title="Comments" />

            <Hero>
                <BackgroundImage Tag="section" className={`featured-image`} fluid={bgImage}>
                    <div className="hero-content">
                        <h1>Protecting your lives</h1>
                        <CallToActionButton>
                            Claim you thing now
                        </CallToActionButton>
                    </div>
                </BackgroundImage>
            </Hero>


            <UL>{
                edges.length && edges ? edges.map(edge => {

                    const { name, comment } = edge.node.childMarkdownRemark.frontmatter;

                    return (
                        <li key={name}>
                            <p><span className="quotes">"</span>{comment}<span className="quotes">"</span></p>
                            <p> - {name}</p>
                        </li>
                    )
                }) : <p>There are no comments to show</p>
            }</UL>
        </Layout >

    )
}

export const query = graphql`
    query comments {
        allFile(filter: {dir: { regex: "/comments/"}}) {
            edges {
                node {
                    id
                    dir
                    name
                    childMarkdownRemark {
                        frontmatter {
                            name
                            comment
                        }
                    }
                }
            }
        }
        file(extension: {eq: "jpg"}) {
            id
            dir
            name
            childImageSharp {
                fluid(maxWidth: 1400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default CommentsPage;