import React from 'react'
import FooterServicesList from '../Components/FooterServicesList'
import FooterContainer from '../Components/FooterContainer'

function Footer() {
  return (
    <div className='my-16'>
        <FooterServicesList/>
        <FooterContainer/>
    </div>
  )
}

export default Footer