# gatsby-transformer-sharp-watermark

Gatsby transformer plugin for add watermark to images using Sharp.

## Demo

[Flamencalente](https://flamencalente.com)

## Install

`npm install --save gatsby-transformer-sharp-watermark`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-transformer-sharp-watermark",
      options: {
        watermark: `${__dirname}/src/images/watermark.png`
      }
    }
  ]
};
```
