import {ReactNode} from 'react'
import Container from './Container'

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='antialiased min-h-screen bg-black-main'>
      <Container className='min-h-[90vh]'>{children}</Container>
    </div>
  )
}

export default Layout
