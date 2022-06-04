import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import headerMockData from '../constants/headerMockData'
import footerMockData from '../constants/footerMockData'


export default function Layout({ children }) {
  return (
    <>
      <Header data={headerMockData} />
      <main>{children}</main>
      <Footer data={footerMockData} />
    </>
  )
}
