# Family Psychiatry, Counseling and Wellness

![Home page](https://i.imgur.com/pIq7znu.png)

This is the official website for Family Psychiatry, Counseling and Wellness (FPCW), a mental health clinic based in Westlake Village, California and offering services nationwide. This website was built from scratch using several web technologies, including:

1. [Gatsby](https://www.gatsbyjs.org), a powerful static website generator based on React
2. [Netlify](https://www.netlify.com/), a web hosting platform that provides continues deployment
3. [Contentful](https://www.contentful.com/), a headless content management system (CMS)
4. [Bulma](https://bulma.io/), a modern CSS framework

## Lightning Fast

As a static site built with Gatsby, the site's pages load almost instantly, resulting in a positive user experience. This is ideal for a business like FPCW that has limited dynamic data. At the same time, because every element of the page is a React component, we can easily add a bit of movement (e.g. interactable carousels).

## Rapid Deployment and Serverless Forms

Netlify hooks into this repository and runs/deploys a new build automatically when changes are pushed to it. In addition, Netlify provides serverless forms, which enabled me to implement the Appointments and Job Application forms without hosting a server of my own.

## Responsive Design

Bulma is a _mobile-first_ CSS framework. This means that content styled once with Bulma will look good on a computer and on a smartphone.

![Library desktop](https://i.imgur.com/ZCOL6sd.png)
![Library mobile](https://i.imgur.com/J1sd6qx.png)

## User-Friendly Content Management

In addition to providing a robust API, Contentful provides an easy-to-use interface for the client to add all manner of content including posts, profiles, and reviews. Among other things, it offers a rich text editor which will be familiar to non-developer users and straightforward tools to draft, publish, unpublish, and delete content.
