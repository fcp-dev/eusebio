import React from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Box, Typography } from '@material-ui/core';
import Layout from '../components/layout';

interface contact {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

interface contactGroups {
  [key: string]: contact[]
}

const contactGroups: contactGroups = {
  firstExecutive: [
    {
      firstName: 'Manuel',
      lastName: 'Ervos',
      email: 'm.ervoes@web.de'
    }
  ],
  secondExecutive: [
    {
      firstName: 'Ralf',
      lastName: 'Gänsler',
      email: 'gaensler@t-online.de'
    }
  ],
  ceo: [
    {
      firstName: 'Rodrigo',
      lastName: 'Rodrigues',
      email: 'rodrigoundluciana@web.de'
    }
  ],
  headOfDepartment: [
    {
      firstName: 'Manuel',
      lastName: 'da Silva',
      email: 'manuel.dasilva@gmx.net',
      phoneNumber: '0172 - 7659665',
    }
  ],
  matchCommittee: [
    {
      firstName: 'Thomas',
      lastName: 'Eichin',
      email: 'nadine.thoma@yahoo.de'
    },
    {
      firstName: 'Frank',
      lastName: 'Fischer',
      email: 'frankfischer123@icloud.com'
    }
  ],
  cultureAndFreeTime: [
    {
      firstName: 'Quim',
      lastName: 'Torres',
      email: 'jose.torres@grohmueller.de'
    },
    {
      firstName: 'Janis',
      lastName: 'Dietel',
      email: 'janisdietel@gmail.de'
    }
  ],
  publicRelations: [
    {
      firstName: 'Konrad',
      lastName: 'Wehrle',
      email: 'Kwehrle@gmx.net'
    }
  ],
  sponsoring: [
    {
      firstName: 'Patrick',
      lastName: 'Niegot',
      email: 'patrickniegot@t-online.de'
    }
  ]
};


export default function ContactPage() {
  const { t } = useI18next();

  let key = 0;
  const contactList = [];
  for (const [groupName, contacts] of Object.entries(contactGroups)) {
    contactList.push(
      <div key={key}>
        <div>
          <Box fontWeight="fontWeightBold">{t(groupName)}</Box>
        </div>
        <div className="utils-margin-bottom-10"></div>
        {contacts.map((contact, index) =>  {
          if (contact.phoneNumber === undefined) {
            return <div className="utils-margin-bottom-20" key={index}>
              <Typography component="p">{contact.firstName} {contact.lastName}</Typography>
              <Typography component="p">{t("email")}: {contact.email}</Typography>
            </div>
          }
          return <div className="utils-margin-bottom-20" key={index}>
            <Typography component="p">{contact.firstName} {contact.lastName}</Typography>
            <Typography component="p">{t("shortcutPhoneNumber")}.: {contact.phoneNumber}</Typography>
            <Typography component="p">{t("email")}: {contact.email}</Typography>
          </div>
        })}
      </div>
    );
    key++;
  }

  return (
    <Layout>
      <Typography variant="h2">{t("contactUs")}</Typography>
      <div className="utils-margin-bottom-30"></div>
      {contactList}
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