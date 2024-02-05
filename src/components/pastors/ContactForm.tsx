'use client'
import ContactUsForm from '@/components/contact-us/contact-us-form/ContactUsForm'
import { Container } from '@/components/Container'

const ContactForm = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto xl:w-5/6">
          <ContactUsForm />
        </div>
      </Container>
    </div>
  )
}

export default ContactForm
