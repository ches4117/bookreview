import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/react'

function Loading() {
  const loadingCss = css`
  display: block;
  margin: 100px auto;
`
  return (
    <RingLoader color="#000" loading css={loadingCss} size={100} />
  )
}

export default Loading