import React from "react";
import SpeakerCard from "./SpeakerCard";
import { SpeakerItem } from "@/utils/types";

export interface Speaker {
  name: string;
  img: string;
  about: string;
}
const SpeakersList = ({speakers}:{speakers:SpeakerItem[]}) => {
  
  const speakersList:Speaker[] = speakers.map((speaker) => ({
    name: speaker.name??"",
    about: speaker.title??"",
    img: speaker.imageUrl,
  }));
  return (
    <div>
      <div className="my-4 text-xl font-semibold">Speakers List</div>
      {speakersList.map((speaker) => (
        <SpeakerCard speaker={speaker} key={speaker.name} />
      ))}
    </div>
  );
};

export default SpeakersList;
