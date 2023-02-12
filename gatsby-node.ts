import type { CreatePagesArgs } from "gatsby";
import { resolve } from "path";

export async function createPages({ graphql, actions, reporter }: CreatePagesArgs) {
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

    const profileTemplate = resolve("./src/templates/providerprofile.tsx");
    // @ts-ignore: need to add types
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

    const postTemplate = resolve("./src/templates/post.tsx");
    // @ts-ignore: need to add types
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
}
