import { Container } from "@/components/Container"
import ItemCard from "@/components/pastors/ItemCard"

const Devotions = () => {
    const devotions=Array.from(Array(4).keys()).map(()=>({
        date:"10 Sep 2024",
        title:"Devotion Title",
        img:"https://res.cloudinary.com/c99/image/upload/v1704981698/Placeholders/Screenshot_2024-01-11_at_16.00.36.png"
    }))
  return (
    <Container className="pt-16">
        <div className="text-3xl font-bold">
            Devotions
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-8">
            {devotions.map((devotion)=><ItemCard key={devotion.title} {...devotion}></ItemCard>)}
        </div>
    </Container>
  )
}

export default Devotions

