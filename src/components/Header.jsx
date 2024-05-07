import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material'
import Logo from '../components/images/CodePenLog.png'
const Container=styled(AppBar)`
`

export default function Header() {
  return (
    <>
      <Container position='static' className='container'>
        <Toolbar>
          <img src={Logo} alt="" width={50} />
        </Toolbar>
      </Container>
    </>
  )
}
