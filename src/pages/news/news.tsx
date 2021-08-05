import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import Layout from '../../components/layout';

type NewsPageProps = {
  data: {
    markdownRemark: {
      html: string,
      frontmatter: {
        title: string
      }
    }
  }
}

export default function NewsPage({ data }: NewsPageProps) {  
  const news = data.markdownRemark;

  return(
    <Layout>
      <Typography variant="h2">{news.frontmatter.title}</Typography>
      <section dangerouslySetInnerHTML={{ __html: news.html }}/>
    </Layout>
  );
}

export const newsQuery = graphql`
  query findNewsBySlug($locale: String!, $slug: String!, $language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    },
    markdownRemark(fields: { slug: { eq: $slug }, locale: { eq: $locale } }) {
      html
      frontmatter {
        title
      }   
    }
  }
`;