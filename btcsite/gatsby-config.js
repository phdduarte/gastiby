/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.org/docs/gatsby-config/
*/

const siteMetadata = require('./config/metadata')

module.exports = {
    siteMetadata,
    //pathPrefix: '/blog' // Variavel onde podemos colocar todo nosso site dentro desse caminho
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
    ]
}
