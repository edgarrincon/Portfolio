/* eslint-disable prettier/prettier */
module.exports = {
  siteMetadata: {
    siteUrl: `https://edgarrincon.com/.com`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edgar Portfolio`,
        short_name: `Edgar Rincón`,
        start_url: `/`,
        background_color: `#ffe817`,
        theme_color: `#101920`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
