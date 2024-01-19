import History from '@/components/about/History'
import Beliefs from '@/components/about/Beliefs'
import Team from '@/components/about/Team'
import ServiceTimes  from '@/components/about/ServiceTimes/ServiceTimes'

export default function About() {
  return (
    <div>
      <ServiceTimes />
      <History />
      <Beliefs />
      <Team />
    </div>
  )
}
