module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
      },
    },
    "gatsby-plugin-preact",
  ],
};
