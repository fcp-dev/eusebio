import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from '../components/layout';
import '../styles/club.scss';

interface IHistoryItem {
  startYear: number,
  endYear: number | null,
  years: Array<number>
}

export default function ClubPage() {
  const { t } = useI18next();

  const historyItems: Array<IHistoryItem> = [
    {
      "startYear": 1980,
      "endYear": 1990,
      "years": [1980, 1981, 1983, 1984, 1986, 1987, 1988, 1989, 1990]
    },
    {
      "startYear": 1991,
      "endYear": 1999,
      "years": [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    {
      "startYear": 2001,
      "endYear": 2010,
      "years": [2001, 2003, 2004, 2005, 2008, 2009, 2010]
    },
    {
      "startYear": 2012,
      "endYear": null,
      "years": [2012, 2013, 2016, 2018, 2019]
    }
  ];

  return (
    <Layout>
      <Typography variant="h2">{t("history.title")}</Typography>
      <div className="utils-margin-bottom-10"></div>
      <div className="history-image-container">
        <img src="/img/legends.jpg"/>
      </div>
      <div className="utils-margin-bottom-30"></div>
      <Typography>{t("history.intro")}</Typography>
      <div className="utils-margin-bottom-30"></div>
      <div className="accordion">
        {historyItems.map((historyItem, index) => (
          <Accordion square key={index}>
            <AccordionSummary className="accordion-summary" expandIcon={<ExpandMoreIcon className="expand-icon"/>}>
              <Typography variant="h6">
                {historyItem.startYear} {t("until")} {historyItem.endYear === null ? t("today") : historyItem.endYear}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {historyItem.years.map((year) => (
                  <div key={year} className="utils-margin-bottom-20">
                    <Box fontWeight="fontWeightBold">{year}</Box>
                    <div dangerouslySetInnerHTML={{__html: t(`history.${year}`, {interpolation: {escapeValue: false}})}}/>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
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