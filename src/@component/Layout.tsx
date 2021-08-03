import React, { ReactNode, FC } from 'react'
import styled from 'styled-components' 

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout

const Container = styled.div`
  padding: 3rem;
`