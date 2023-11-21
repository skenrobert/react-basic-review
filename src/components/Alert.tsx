import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode; //pass html for a props 
}

const Alert = ({children}: Props) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert