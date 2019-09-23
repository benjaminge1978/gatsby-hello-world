module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'Andrew Mead'
    },
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
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'l9cbva93sfas',
                accessToken: '89kkKD75s8rWf3AzHdTg6JpmF0oPoD4BphyB6ZFZITE'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}