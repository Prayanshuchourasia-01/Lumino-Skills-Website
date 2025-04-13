import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactComponent from '../components/ContactComponent'
import { ScrollToTop } from '../components/ScrollToTop'

const ContactPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default ContactPage
