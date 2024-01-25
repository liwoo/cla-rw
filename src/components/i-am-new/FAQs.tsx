import React from 'react'
import FaqCTA from '@/components/cta/FaqCta'

const FAQs = () => {
    const faqs=[
        {
            title:"How is our church different?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam fuga dignissimos quas consequuntur provident facere illum, velit cupiditate a inventore ut id animi necessitatibus culpa corrupti debitis aut optio.",
            ctaText:"About Us",
            to:"#"
        },
        {
            title:"Who is the lead pastor?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam fuga dignissimos quas consequuntur provident facere illum, velit cupiditate a inventore ut id animi necessitatibus culpa corrupti debitis aut optio.",
            ctaText:"Pastor Andrew",
            to:"#"
        },
    ]
  return (
    <div>
        <FaqCTA items={faqs}/>
    </div>
  )
}

export default FAQs