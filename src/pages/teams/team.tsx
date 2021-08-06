import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Paper, Tab, Tabs } from '@material-ui/core';
import FootballWidget from '../../components/football-widget';
import Layout from '../../components/layout';
import TabPanel from '../../components/tab-panel';
import TeamMemberList from '../../components/team-member-list';
import '../../styles/team.scss';

interface ITeamMember {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

interface INode {
  frontmatter: ITeamMember
};

type TeamPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: Array<INode>
    }
  },
  pageContext: {
    teamId: number;
  }
};

export default function TeamPage({ data, pageContext }: TeamPageProps) {
  const { t } = useI18next();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  let matchesWidgetId : string = '';
  let tableWidgetId: string = '';
  switch(pageContext.teamId) {
    case 1:
      tableWidgetId = '02FAKBUTSO000000VUM1DNPBVVC8O8D2';
      matchesWidgetId = '02D9BOH43K000000VUM1DNOAVS6TOAL6';
      break;
    case 2:
      tableWidgetId = '02FAKCCT0O000000VUM1DNOTVSIG8NIT';
      matchesWidgetId = '02D9BOSE38000000VUM1DNOOVSR8K0D7';
      break;
    case 3:
      tableWidgetId = '02D9BNCIJK000000VUM1DNOOVSR8K0D7';
      matchesWidgetId = '02D9BP0HAG000000VUM1DNOOVSR8K0D7';
      break;
  }

  return (
    <Layout>
      <Paper className="tabs">
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'none'}}}>
          <Tab className="tab" label={t("players")}/>
          <Tab className="tab" label={t("matches")}/>
          <Tab className="tab" label={t("table")}/>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <TeamMemberList teamMemberData={data.allMarkdownRemark.nodes}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="utils-margin-bottom-20"></div>
        <FootballWidget id={matchesWidgetId} name="widget1" height="2500"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="utils-margin-bottom-20"></div>
        <FootballWidget id={tableWidgetId} name="widget1" height="1100"/>
      </TabPanel>
    </Layout>
  );
}

export const pageQuery = graphql`
  query getTeamMembersById($teamId: Int!, $language: String!) {
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
      filter: { frontmatter: { teamId: { eq: $teamId } } },
      sort: { fields: [frontmatter___firstName], order: ASC }
    ) {
      nodes {
        frontmatter {
          firstName,
          lastName,
          position,
          image
        }
      }
    }
  }
`;
