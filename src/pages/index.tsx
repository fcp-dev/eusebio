import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import NewsItem from '../components/news-item';
import '../styles/start.scss';

interface INode {
  fields: {
    slug: string
  },
  frontmatter: {
    date: string,
    slug: string,
    title: string
  },
  html: string
};

type StartPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  }
};

export default function StartPage({ data }: StartPageProps) {
  const newsList: Array<INode> = data.allMarkdownRemark.nodes;

  const { t } = useI18next();

  return (
    <Layout>
      <div className="welcome-banner">
        <div className="grid-item-left"></div>
        <div className="grid-item-middle">
          <div className="welcome-container">
            <Typography className="welcome-title" variant="h1">
              <Box fontStyle="italic">{t("welcome")}</Box>
            </Typography>
            <div className="welcome-blockquote-container">
              <blockquote className="welcome-blockqoute">
                <Typography className="welcome-blockquote-text" component="p">{t("welcomeText")}</Typography>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="grid-item-middle-right">
          <div className="welcome-image1"></div>
        </div>
      </div>
      <div className="seperator-container">
        <div className="separator">
          <Typography variant="h6">{t("news")}</Typography>
        </div>
      </div>
      <Grid container>
        {newsList.map((news, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <NewsItem title={news.frontmatter.title} date={news.frontmatter.date} link={news.fields.slug} preview={news.html}/>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query getNewsByLocale($locale: String!, $language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    },
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/news/" }, fields: { locale: { eq: $locale } } },
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 10
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
        }
        html
      }
    }
  }
`;