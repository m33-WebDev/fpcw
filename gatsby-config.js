/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const url = "https://familypsychiatry.us";
const title = "Family Psychiatry, Counseling, and Wellness";
const shortTitle = "FPCW";

module.exports = {
    siteMetadata: {
        siteUrl: url,
        title: title,
        shortTitle: shortTitle,
        description: "A mental health clinic with a focus on overall wellness. Find better, one step at a time.",
        author: "Sabira Saifuddin, M.D."
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src`
            }
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                sitemap: `${url}/sitemap.xml`,
                policy: [
                    {
                        userAgent: "*",
                        allow: "/"
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-advanced-sitemap",
            options: {
                exclude: ["/dev-404-page", "/404", "/formsuccess"]
            }
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "85wb86zbaewe",
                accessToken: "uU3iwop7LhREN5CerJI5sONtkwBUMfCC_9yTKjDAXWE"
            }
        },
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: title,
                short_name: shortTitle,
                start_url: "/",
                background_color: "#f5f5f5",
                theme_color: "#f5f5f5",
                display: "standalone",
                icon: "src/images/maskable_icon.png",
                icon_options: {
                    purpose: "maskable any"
                }
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-catch-links",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-122920911-4"
            }
        },
        {
            resolve: "gatsby-plugin-canonical-urls",
            options: {
                siteUrl: url
            }
        },
        "gatsby-plugin-offline"
    ]
};
