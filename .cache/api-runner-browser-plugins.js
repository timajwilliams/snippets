module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"remarkPlugins":[null,null,null,[null,{"style":"smart"}]]},
    },{
      plugin: require('../node_modules/gatsby-theme-code-notes/node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-code-notes/gatsby-browser.js'),
      options: {"plugins":[],"contentPath":"notes","basePath":"/","showThemeInfo":true,"showDescriptionInSidebar":true},
    }]
