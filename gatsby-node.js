const path = require(`path`)
const slash = require(`slash`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     //   console.log(node);
//   }
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulProviderProfile {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const profileTemplate = path.resolve(`./src/templates/providerprofile.js`)
  result.data.allContentfulProviderProfile.edges.forEach(({ node }) => {
    const path = node.slug
    console.log("Creating page: " + path)
    createPage({
      path,
      component: profileTemplate,
      context: {
        pagePath: path,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allContentfulPost.edges.forEach(({ node }) => {
    const path = node.slug
    console.log("Creating page: " + path)
    createPage({
      path,
      component: postTemplate,
      context: {
        pagePath: path,
      },
    })
  })
}
