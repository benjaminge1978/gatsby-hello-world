module.exports = {
    siteMetadata: {
        title: `Rettingshet!`,
        author: `Dynamic`
      },
      plugins: [
          {
              resolve:'gatsby-source-filesystem',
              options: {
                  name:'src',
                  path: `${__dirname}/src/`
                }
            },
            'gatsby-transformer-remark' 
        ]
  }