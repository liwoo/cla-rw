import React from "react";
import SpeakerCard from "./SpeakerCard";
import { SpeakerItem } from "@/utils/types";

export interface Speaker {
  name: string;
  img: string;
  about: string;
}
const SpeakersList = ({ speakers }: { speakers: SpeakerItem[] }) => {

  const speakersList: Speaker[] = speakers.map((speaker) => ({
    name: speaker.name ?? "",
    about: speaker.title ?? "",
    img: speaker.imageUrl,
  }));
  return (
    <div className="container mx-auto text-center my-16">
      <div className="my-4 text-xl font-semibold">Speakers List</div>
      <div className="flex justify-center flex-wrap">
        {speakersList.map((speaker) => (
          <SpeakerCard speaker={speaker} key={speaker.name} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersList;
