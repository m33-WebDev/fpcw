const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

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
    );

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const profileTemplate = path.resolve("./src/templates/providerprofile.tsx");
    result.data.allContentfulProviderProfile.edges.forEach(({ node }) => {
        const path = "providers/" + node.slug;
        createPage({
            path,
            component: profileTemplate,
            context: {
                pagePath: node.slug
            }
        });
    });

    const postTemplate = path.resolve("./src/templates/post.tsx");
    result.data.allContentfulPost.edges.forEach(({ node }) => {
        const path = "library/" + node.slug;
        createPage({
            path,
            component: postTemplate,
            context: {
                pagePath: node.slug
            }
        });
    });
};
