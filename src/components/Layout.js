import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p8 ${className}`}>
        {children}
    </div>
  )
}

export default Layout
