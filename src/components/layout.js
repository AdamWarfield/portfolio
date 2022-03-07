import React from 'react'
import { Helmet } from 'react-helmet';
import { withPrefix, Link } from "gatsby"
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Helmet>
    <script src={withPrefix('script.js')} type="text/javascript" />
</Helmet>
      </>
    )
  }
}

export default Template
