import * as React from 'react'

interface Header {
    color?: "pink" | "purple"
    children: React.ReactNode
}

const Header: React.FC<Header> = ({ color, children }) => {
  return <header className={`header header-${color}`}>{children}</header>
  }

export { Header }