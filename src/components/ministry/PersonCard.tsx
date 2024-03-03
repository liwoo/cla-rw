import ClientImage from "@/components/ClientImage";

interface PersonCardProps {
  img: string;
  name: string;
  position: string;
  about: string;
}
const PersonCard = ({ img, name, position, about }: PersonCardProps) => {
  return (
    <div className="h-full w-full">
      <div className="relative overflow-hidden rounded-lg pt-[120%]">
        <ClientImage
          fill
          quality={50}
          blurDataURL={
            "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
          }
          src={img}
          alt="Coming Soon"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="relative flex h-full w-full items-end">
          <div className="w-full bg-primary p-8 text-center text-white">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-2xl">{position}</div>
          </div>
        </div>
      </div>
      <div className="my-8">{about}</div>
    </div>
  );
};

export default PersonCard;
