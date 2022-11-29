import * as React from 'react'

interface Header {
    color?: "pink" | "purple"
    children: React.ReactNode
}

const Header: React.FC<Header> = ({ color = "pink", children }) => {
  return <div className={`button button-${color}`}>{children}</div>
  }

export { Header }