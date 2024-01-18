import About from '@/components/pastors/About'
import ContactForm from '@/components/pastors/ContactForm'
import Devotions from '@/components/pastors/Devotions'
import Hero from '@/components/pastors/Hero'
import Sermons from '@/components/pastors/Sermons'
import React from 'react'

const Pastors = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <ContactForm/>
        <Devotions/>
        <Sermons/>
    </div>
  )
}

export default Pastors