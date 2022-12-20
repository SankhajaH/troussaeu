import {ReactNode, ElementType} from 'react'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
}

const Container = ({children, as, className}: Props) => {
  const Component = as || 'div'
  return (
    <Component
      className={`container max-w-4xl mx-auto px-4 font-body overflow-x-hidden ${className}`}
    >
      {children}
    </Component>
  )
}

export default Container
