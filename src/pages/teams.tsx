import React from 'react';
import { graphql } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import { isMobile } from '../utils/helper';
import '../styles/team.scss';

interface ITeam {
  id: number,
  imagePath: string,
  title: string
}

const teams: Array<ITeam> = [
  {
    id: 1,
    imagePath: '/img/firstTeam.jpg',
    title: 'firstTeam'
  },
  {
    id: 2,
    imagePath: '/img/secondTeam.jpg',
    title: 'secondTeam'
  },
  {
    id: 3,
    imagePath: '/img/thirdTeam.jpg',
    title: 'thirdTeam'
  }
];

export default function TeamOverviewPage() {
  const { t } = useI18next();

  return (
    <Layout>
      <Grid container direction="row" spacing={3}>
        {teams.map((team, index) => (
          <Grid item xs={12} md={index === 0 ? 12 : 6} key={index}>
            <Link to={`/teams/${team.id}`}>
              <ButtonBase key={team.title} className={`image ${index === 0 && isMobile() === false ? 'utils-height-600' : 'utils-height-400'}`}>
                <span className="image-source" style={{backgroundImage: `url(${team.imagePath})`}}/>
                <span className="image-backdrop"/>
                <span className="image-button">
                  <Typography component="span" variant="subtitle1" color="inherit" className="image-title">
                    {t(team.title)}
                  </Typography>
                </span>
              </ButtonBase> 
            </Link>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export const languageQuery = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;