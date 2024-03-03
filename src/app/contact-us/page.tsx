import { PageTitle } from "@/components/PageTitle";
import GetInTouch from "@/components/contact-us/GetInTouch";

const ContactUs = () => {
  return (
    <div className="mt-8 md:mt-32">
      <PageTitle
        title={"Get In Touch"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptates, officiis fugit, inventore commodi suscipit iure rem, expedita dolore temporibus possimus veritatis similique aliquam delectus ab consectetur corrupti excepturi voluptatibus."
      />
      <GetInTouch />
    </div>
  );
};

export default ContactUs;
