# Karma-po

## Tag v0.3 no grunt add karma-chrome-launcher

* jasmine-core
* karma
* karma-jasmine
* karma-jasmine-jquery
* karma-chrome-launcher

## And more config

```javascript
browsers: ['Chrome', 'Chrome_without_security'],

    // you can define custom flags
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    }
```

## To run

* Server: `node_modules/karma/bin/karma start my.conf.js`

And open your browser in `http://localhost:9876/` and test executing in just moment.

**In this case automatic open a browser and run test, moreover if you close browser reopen again**
