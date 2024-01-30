import { PageTitle } from "@/components/PageTitle"
import FindSermons from "@/components/sermons/FindSermons"
import Hero from "@/components/sermons/Hero"
import RecentSermons from "@/components/sermons/RecentSermons"

const Sermons = () => {
  return (
    <div className="pt-16">
        <PageTitle title={"Sermons"} />
        <Hero/>
        <RecentSermons/>
        <FindSermons/>
    </div>
  )
}

export default Sermons