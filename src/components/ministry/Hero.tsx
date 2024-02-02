import ClientImage from "@/components/ClientImage";

const Hero = ({img}:{img:string}) => {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[600px]">
        <ClientImage
           fill
            quality={50}
            blurDataURL={"https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"}
            src={img}
            alt="Coming Soon"
            className="absolute inset-0 h-full w-full object-cover object-top"
        />
    </div>
  )
}

export default Hero