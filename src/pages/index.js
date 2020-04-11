import React from "react"
import { Link, graphql } from "gatsby"
import * as random from "random"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplashTile from "../components/splashtile"
import NewsTile from "../components/newstile"

import logo from "../images/logo-new.png"

export default ({ data }) => {

  function getNewsTiles() {
    var tiles = []
  
    for (var i = 0; i < 3; ++i) {
      tiles.push(
        <div class="column">
          <NewsTile post={data.allContentfulNewsPost.nodes[i]} />
        </div>
      )
    }
  
    return tiles
  }
  

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.shortTitle} />
      <section class="hero is-light is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container" style={{ height: "100%" }}>
            <div class="columns is-vcentered" style={{ height: "100%" }}>
              <div
                class="column is-6"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div>
                  <h1 className="title is-1 is-size-3-mobile">
                    Family Psychiatry <br />
                    Counseling & Wellness
                  </h1>
                  <h2 className="subtitle">Find better, one step at a time</h2>
                  <Link to="/appointments" className="has-text-white">
                    <button class="button is-success">
                      <p>Schedule an appointment today</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div class="column is-6">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div class="tile">
                      <div className="tile is-parent">
                        <div
                          className="tile is-child"
                          style={{ minHeight: "40vh" }}
                        >
                          <SplashTile
                            title="Services"
                            image="https://live.staticflickr.com/1849/29409117887_b8cd64b42f_b.jpg"
                          />
                        </div>
                      </div>
                      <div class="tile is-parent">
                        <div className="tile is-child">
                          <SplashTile
                            title="Locations"
                            image="https://cdn.theatlantic.com/thumbor/ziZG61zzYJ2ZZQCAFj-oWDaI1Zc=/900x599/media/img/photo/2018/05/travel-monday-a-photo-trip-to-zhang/z01_1021238707/original.jpg"
                          />
                        </div>
                      </div>{" "}
                    </div>
                    <div class="tile">
                      <div className="tile is-parent">
                        <div className="tile is-child">
                          <SplashTile
                            title="Education"
                            image="https://greece.greekreporter.com/files/Hagia-Sophia.jpg"
                          />
                        </div>
                      </div>
                      <div class="tile is-parent">
                        <div
                          className="tile is-child"
                          style={{ minHeight: "40vh" }}
                        >
                          <SplashTile
                            title="Telehealth"
                            image="https://qtxasset.com/2016-11/telemedicine-medical-spa-servicesjpg.jpg?901Y_noU1ISnVdF1IV_bYbieUL7K23b0"
                          />
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div class="content has-text-centered">
              <h1 className="title is-2" style={{borderBottom: '4px solid #494949', display: 'inline'}}>News & Events</h1>
            </div>
            <div className="columns is-centered">
              <div class="column is-8">
                <div class="columns">
                  {getNewsTiles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export default ({ data }) => {
//   function getRandomPost() {
//     var idx = random.int(0, data.allPosts.edges.length - 1)
//     return data.allPosts.edges[idx].node
//   }

//   function getImageFromPost(post) {
//     var defaultImg = "https://bulma.io/images/placeholders/1280x960.png;"
//     return post && post.image ? post.image.file.url : defaultImg
//   }

//   var freshPost = data.newestPosts.nodes[0]
//   var insiderPost = data.insiderPosts.nodes[0]
//   var stylePost = data.nokternelStyleGuide
//   var devlogPost = data.projectSpudDevlog
//   var beginnerPost = data.beginnersGuide;

//   return (
//     <Layout>
//       <SEO title={data.site.siteMetadata.shortTitle} />
//       <div className="level">
//         <div className="container">
//           <div className="content has-text-centered">
//             <figure
//               className="image"
//               style={{
//                 maxWidth: "512px",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 marginBottom: ".5vmin",
//               }}
//             >
//               <img src={logo} alt="logo" />
//             </figure>
//             <p style={{ fontStyle: "italic" }}>
//               A place to learn about Unreal Engine 4,
//               <br /> gamedev, and chasing your dreams
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="tile is-ancestor">
//         <div className="tile is-vertical">
//           <div className="tile">
//             <div className="tile is-parent is-9">
//               <div className="tile is-child">
//                 <Widget
//                   title={freshPost.title}
//                   subtitle="Fresh Off the Press"
//                   image={getImageFromPost(freshPost)}
//                   to={freshPost.slug}
//                   fullheight
//                 />
//               </div>
//             </div>
//             <div className="tile is-parent is-vertical">
//               <div className="tile is-child">
//                 <Widget
//                   title={insiderPost.title}
//                   subtitle="Insider Insight"
//                   image={getImageFromPost(insiderPost)}
//                   to={insiderPost.slug}
//                 />
//               </div>
//               <div className="tile is-child">
//                 <Widget
//                   title={stylePost.title}
//                   subtitle="Style"
//                   image={stylePost.image.file.url}
//                   to={stylePost.slug}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="tile">
//             <div className="tile is-parent is-vertical is-4">
//               <div className="tile is-child">
//                 <Widget
//                   to={devlogPost.slug}
//                   title="Project Spud"
//                   subtitle="Devlog"
//                   image={getImageFromPost(devlogPost)}
//                 />
//               </div>
//               <div className="tile is-child">
//                 <Widget
//                   to={getRandomPost().slug}
//                   title="Learn something new"
//                   subtitle="Random"
//                   image="https://cdn.vox-cdn.com/thumbor/2PaCKdhf1dUhQkcGE9P-pMwKcJQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/8587203/overwatch_loot_box.jpg"
//                 />
//               </div>
//             </div>
//             <div className="tile is-parent">
//               <div className="tile is-child">
//                 <Widget
//                   to={beginnerPost.slug}
//                   title="No better place to start"
//                   subtitle="Beginner's Guide"
//                   image={getImageFromPost(beginnerPost)}
//                   fullheight
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

export const query = graphql`
  query {
    site {
      siteMetadata {
        tipOfTheWeek
        shortTitle
      }
    }
    allContentfulNewsPost{
      nodes{
        slug
        title
        feature {
          file {
            url
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         tipOfTheWeek
//         shortTitle
//       }
//     }
//     allPosts: allContentfulBlogPost {
//       edges {
//         node {
//           slug
//           title
//           id
//           image {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//     newestPosts: allContentfulBlogPost(
//       filter: { tags: { nin: ["insider", "devlog", "series", "nokternel-style-guide"] } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     insiderPosts: allContentfulBlogPost(
//       filter: { tags: { in: "insider" } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     editorPosts: allContentfulBlogPost(
//       filter: { tags: { in: "editor" } }
//       sort: { fields: createdAt, order: DESC }
//     ) {
//       nodes {
//         slug
//         title
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//     nokternelStyleGuide: contentfulBlogPost(slug: { eq: "nokternel-style-guide" }) {
//       title
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//     projectSpudDevlog: contentfulBlogPost(slug: { eq: "devlog-project-spud" }) {
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//     beginnersGuide: contentfulBlogPost(
//       series: { eq: "Beginner's Guide" }
//       seriesNum: { eq: 0 }
//     ) {
//       title
//       slug
//       image {
//         file {
//           url
//         }
//       }
//     }
//   }
// `
