import React from 'react'
import PropTypes from 'prop-types'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/react'

function Loading({ loading }) {
  const loadingCss = css`
  display: block;
  margin: 100px auto;
`
  return (
    <RingLoader color="#000" loading={loading} css={loadingCss} size={100} />
  )
}

Loading.propTypes = {
  loading: PropTypes.bool,
}

export default Loading