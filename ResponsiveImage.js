import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

export default function ResponsiveImage ({
  source,
  initW,
  initH,
  width,
  height,
}) {
  if (width) {
    return (
      <Image
        source={source}
        style={{
          width,
          height: initH / initW * width,
        }}
      />
    )
  }

  if (height) {
    return (
      <Image
        source={source}
        style={{
          width: initW / initH * height,
          height,
        }}
      />
    )
  }
}

ResponsiveImage.propTypes = {
  source: PropTypes.any,
  initW: PropTypes.number,
  initH: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}
