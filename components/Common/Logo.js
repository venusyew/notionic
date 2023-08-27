// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 100 100'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <g transform='translate(0.000000,100) scale(0.080000,-0.080000)'>
      <img src="https://raw.githubusercontent.com/venusyew/notionic/main/public/favicon.png">
    </g>
  </svg>
)

export default Logo
