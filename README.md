# Karma-po

## Tag v0.3 no grunt add karma-phantomjs-launcher

- jasmine-core
- karma
- karma-jasmine
- karma-jasmine-jquery
- karma-phantomjs-launcher
- phantomjs-prebuilt

## And more config

```javascript
browsers: ['PhantomJS', 'PhantomJS_custom'],

   // you can define custom flags
   customLaunchers: {
     'PhantomJS_custom': {
       base: 'PhantomJS',
       options: {
         windowName: 'my-window',
         settings: {
           webSecurityEnabled: false
         },
       },
       flags: ['--load-images=true'],
       debug: true
     }
   },

   phantomjsLauncher: {
     // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
     exitOnResourceError: true
   }
```

## To run

- Server: `node_modules/karma/bin/karma start my.conf.js`

**;)**
