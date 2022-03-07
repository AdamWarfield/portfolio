import React from 'react'
import { Helmet } from 'react-helmet';
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
        <Helmet>
    <script src="/scripts.js" type="text/javascript" />
</Helmet>
        <Navigation />
        <main>{children}</main>
        <Footer />
        
      </>
    )
  }
}

export default Template
