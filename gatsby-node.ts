import { CreatePagesArgs } from "gatsby";
import { resolve } from "path";

export async function createPages({ graphql, actions, reporter }: CreatePagesArgs) {
    const { createPage } = actions;

    const { data, errors } = await graphql<Queries.CreatePagesQuery>(
        `
            query CreatePages {
                profiles: allContentfulProviderProfile {
                    nodes {
                        id
                        slug
                    }
                }
                posts: allContentfulPost {
                    nodes {
                        slug
                    }
                }
            }
        `
    );

    if (errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    data?.profiles.nodes.forEach(profile => {
        createPage({
            path: `providers/${profile.slug}`,
            component: resolve("./src/templates/provider-profile.tsx"),
            context: {
                pagePath: profile.slug
            }
        });
    });

    data?.posts.nodes.forEach(post => {
        createPage({
            path: `library/${post.slug}`,
            component: resolve("./src/templates/post.tsx"),
            context: {
                pagePath: post.slug
            }
        });
    });
}
