/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Rettinghetsadvokater`,
      },
      plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/img`,
          },
        },
      ],
      plugins: [
        {
          resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: "YOUR_GOOGLE_TAGMANAGER_ID",
      
            // Include GTM in development.
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,
      
            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },
      
            // Specify optional GTM environment details.
            gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            dataLayerName: "YOUR_DATA_LAYER_NAME",
          },
        },
      ]
    }