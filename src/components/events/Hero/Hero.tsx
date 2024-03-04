import ClientImage from "@/components/ClientImage";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import { ArrowRightIcon, FolderOpenIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="relative min-h-[500px]">
      <ClientImage
        fill
        quality={50}
        blurDataURL={
          "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
        }
        src="https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.02.png"
        alt="Coming Soon"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Container>
        <div className="relative py-40 text-white">
          <div className="my-2 text-lg font-bold md:text-2xl">
            Upcoming Event:
          </div>
          <div className="my-2 text-2xl font-bold md:text-4xl">Event Name</div>
          <div className="my-2 flex items-center">
            <span className="mr-4 text-lg font-bold text-yellow-300 md:text-2xl">
              Adult
            </span>
            <FolderOpenIcon className="h-8 text-yellow-300" />
          </div>
        </div>
      </Container>
      <div className="relative  w-full bg-yellow-300">
        <div className="absolute bottom-0 left-0 z-0 w-full bg-yellow-300"></div>
        <Container>
          <div className="block items-center justify-evenly lg:justify-between py-6 md:py-0 md:flex">
            <div className="relative p-6 lg:p-0 flex-1">
              <div className="block items-center justify-between md:flex">
                <DetailItem title={"date"} value={"2 Apr"} />
                <div className="hidden border-[0.5px] border-black pt-[20%] md:block"></div>
                <DetailItem title={"venue"} value={"Namiwawa"} />
                <div className="hidden border-[0.5px] border-black pt-[20%] md:block"></div>
                <DetailItem title={"time"} value={"12:00"} />
              </div>
              <div className="mt-8 flex items-end justify-start md:justify-end">
                <LargeButton>Register</LargeButton>
              </div>
            </div>
            <div className="relative mx-12 hidden w-[30%] pt-[25%] lg:block">
              <ClientImage
                fill
                quality={50}
                blurDataURL={
                  "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
                }
                src="https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.16.png"
                alt="Coming Soon"
                className="absolute !-top-[10%] !h-[110%] w-full object-cover"
              />
            </div>

            <div className="relative py-6 w-full lg:py-0 md:w-[35%] lg:w-[25%]">
              <div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores accusamus enim totam distinctio, quibusdam quasi
                  laboriosam provident, ducimus modi vero similique ipsum id
                  possimus voluptatem non debitis corporis, excepturi quam.
                </div>
                <div className="my-4 flex items-center">
                  <span className="mr-2 cursor-pointer font-bold">
                    Read More
                  </span>
                  <ArrowRightIcon className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;

interface DetailItemProps {
  title: string;
  value: string;
}
const DetailItem = ({ title, value }: DetailItemProps) => {
  return (
    <div className="my-4">
      <div className="text-2xl font-bold lg:text-3xl">{value}</div>
      <div className="my-2 font-semibold uppercase">{title}</div>
    </div>
  );
};
