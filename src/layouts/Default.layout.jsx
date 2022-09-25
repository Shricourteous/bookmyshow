import React from 'react'
import NavbarComponent from '../components/Navbar/Navbar.Component'

const DefaultLayoutHOC = (Component) => ({...props}) => {
  return (
    <div>
        <NavbarComponent/>
        <Component {...props}/>
        <div>Footer</div>

    </div>
  )
}

export default DefaultLayoutHOC