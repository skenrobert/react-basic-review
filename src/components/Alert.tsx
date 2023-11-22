import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode; //pass html for a props 
    onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className='alert alert-primary alert-dismissible'>
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" />  
    </div>
  )
}

export default Alert