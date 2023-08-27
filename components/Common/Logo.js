// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const Logo = (props) => (
 
    <Image src='/favicon.png'
                  alt='Logo'
                  width={30}
                  height={30}
                  vertical-align='middle'
                />
)

export default Logo
