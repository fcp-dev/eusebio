import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import Layout from '../components/layout';
import Content from '../../content/text/content';
import Copyright from '../../content/text/copyright';
import Links from '../../content/text/links';
import Privacy from '../../content/text/privacy';

export default function LegalNoticePage() {
  return (
    <Layout>
      <Typography variant="h2">Impressum</Typography>
      <div className="utils-margin-bottom-30"></div>
      <div>
        <Typography variant="h4">Herausgeber</Typography>
        <div className="utils-margin-bottom-20"></div>
        <Typography component="p">FC Portugiesen Freiburg e. V.</Typography>
        <Typography component="p">Waldstr. 1H</Typography>
        <Typography component="p">79108 Freiburg</Typography>
        <div className="utils-margin-bottom-10"></div>
        <Typography component="p">Amtsgericht Freiburg VR-Nr. 1943</Typography>
      </div>
      <div className="utils-margin-bottom-30"></div>
      <div>
        <Typography variant="h4">Vertretungsberechtigter Vorstand</Typography>
        <div className="utils-margin-bottom-20"></div>
        <div>
          <Typography component="p">1. Vorstand</Typography>
          <Typography component="p">Manuel Ervos</Typography>
          <Typography component="p">Mail: m.ervoes@web.de</Typography>
        </div>
        <div className="utils-margin-bottom-20"></div>
        <div>
          <Typography component="p">2. Vorstand</Typography>
          <Typography component="p">Ralf Gänsler</Typography>
          <Typography component="p">Tel.: 0173 - 3403211</Typography>
          <Typography component="p">Mail: gaensler@t-online.de</Typography>
        </div>
      </div>
      <div className="utils-margin-bottom-40"></div>
      <Typography variant="h2">Haftungsausschluss</Typography>
      <div className="utils-margin-bottom-30"></div>
      <div>
        <div>
          <Typography variant="h4">Haftung für Inhalte</Typography>
          <div className="utils-margin-bottom-20"></div>
          <div>
            {Content}
          </div>
        </div>
        <div className="utils-margin-bottom-30"></div>
        <div>
          <Typography variant="h4">Haftung für Links</Typography>
          <div className="utils-margin-bottom-20"></div>
          <div>
            {Links}
          </div>
        </div>
        <div className="utils-margin-bottom-30"></div>
        <div>
          <Typography variant="h4">Urheberrecht</Typography>
          <div className="utils-margin-bottom-20"></div>
          <div>
            {Copyright}
          </div>
        </div>
        <div className="utils-margin-bottom-30"></div>
        <div>
          <Typography variant="h4">Datenschutz</Typography>
          <div className="utils-margin-bottom-20"></div>
          <div>
            {Privacy}
          </div>
        </div>
        <div className="utils-margin-bottom-30"></div>
      </div>
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