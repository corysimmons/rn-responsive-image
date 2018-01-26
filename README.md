# rn-responsive-image
Simple React Native responsive image component.

## Install

Add ResponsiveImage.js to your project.

## Usage

```js
import ResponsiveImage from '../utilities/ResponsiveImage'

export default () => {
  return (
    <ResponsiveImage
      source={require(`../static/img/logo.png`)}
      initW={892}
      initH={273}
      width={200}
    />
  )
}
```

## API

- `source` whatever you'd set `<Image />` to.
- `initW` required. Initial width of raw image.
- `initH` required. Initial height of raw image.
- `width` **or** `height` required. Just one. Fixed number (sorry too busy for percentages right now).
