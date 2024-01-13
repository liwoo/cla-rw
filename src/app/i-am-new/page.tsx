import FAQs from '@/components/i-am-new/FAQs'
import Hero from '@/components/i-am-new/Hero'
import New from '@/components/i-am-new/NewHere'
import StartingPoint from '@/components/i-am-new/StartingPoint'
import VisitPlan from '@/components/i-am-new/VisitPlan'

const IAmNew = () => {
  const heroBackground =
    'https://res.cloudinary.com/c99/image/upload/v1705048187/Placeholders/Screenshot_2024-01-12_at_10.27.29.png'

  return (
    <div>
      <Hero alt={'background'} src={heroBackground} />
      <New />
      <FAQs />
      <VisitPlan/>
      <StartingPoint/>
    </div>
  )
}

export default IAmNew
