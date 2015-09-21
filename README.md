This npm package is based on the work by Will Rossiter (wilr, https://github.com/wilr/grunt-shopify). 

He most definitely put all the leg work in, I just added a sync option so I can pull changes from live themes into preview themes.

## Getting Started

I CANNOT STRESS THIS ENOUGH, This is a package made for my own personal use and I will in no way provide support.

If you do come across this you are more than very welcome to use it:

grunt-contrib-watch is required

This is the basic gruntfile:

```js

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify-wsync');

  grunt.initConfig({
     shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
          api_key: "###################",
          password: "####################",
          url: "########.myshopify.com",
          //The directory you want your theme to download to on your local machine
          base: 'theme/',
          //Theme id for the non-live theme, this is where local changes are made and get pushed to shopify when you save (grunt-contrib-watch)
          theme: '######',
          //Theme id for the Live theme, Live is always the theme you sync from not to, you have been warned!
          sync: '######'
        }
    },

    watch: {
      shopify: {
        files: ['theme/**'],
        tasks: ["shopify"]
      }
    }
  });

  grunt.registerTask('default', ['shopify']);
};

```