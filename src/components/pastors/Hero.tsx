import ClientImage from '@/components/ClientImage'
import { Container } from '@/components/Container'

const Hero = () => {
  const blurImg =
    'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
  const background =
    'https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg'
  return (
    <div className="relative min-h-[300px] md:min-h-[550px] w-full flex items-end">
      <ClientImage
        fill
        quality={50}
        blurDataURL={blurImg}
        src={background}
        alt={'background'}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Container className="relative flex p-8 w-full">
        <div className="text-white">
          <div className="text-xl md:text-3xl font-bold uppercase">Pastor name</div>
          <div className="my-2 md:text-2xl">Office</div>
          <div>icons</div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
