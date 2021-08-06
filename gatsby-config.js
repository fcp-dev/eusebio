module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`de`, `pt`],
        defaultLanguage: `de`
      }
    },
    {
      resolve: `gatsby-plugin-load-script`,
      options: {
        src: `https://www.fussball.de/static/layout/fbde2/egm/js/widget2.js`
      }
    },
  ]  
}
