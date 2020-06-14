module.exports = {
  siteMetadata: {
    title: 'Code Snippets',
    description: `A Collection of useful code snippets`,
    author: 'Tim',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
