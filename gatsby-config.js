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
        gitRepoContentPath:'https://github.com/timajwilliams/snippets/tree/master/notes',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
