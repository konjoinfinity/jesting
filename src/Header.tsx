import * as React from 'react'

interface Header {
    color?: "pink" | "purple"
}

const Header: React.FunctionComponent<Header> = ({ color = "pink", children }) => {
  return <div className={`button button-${color}`}>{children}</div>
  }

export { Header }