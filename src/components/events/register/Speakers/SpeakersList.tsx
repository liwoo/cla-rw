import React from "react";
import SpeakerCard from "./SpeakerCard";
import { SpeakerItem } from "@/utils/types";
import clsx from "clsx";

export interface Speaker {
  name: string;
  img: string;
  about: string;
}
const SpeakersList = ({ speakers, horizontal = false }: { speakers: SpeakerItem[], horizontal?: boolean }) => {

  const speakersList: Speaker[] = speakers.map((speaker) => ({
    name: speaker.name ?? "",
    about: speaker.title ?? "",
    img: speaker.imageUrl,
  }));
  return (
    <div>
      <div className={clsx(horizontal && "text-center","my-4 mb-8 text-xl font-semibold")}>Speakers List</div>
      <div className={clsx(horizontal ? "flex justify-center flex-wrap" : "flex flex-col")}>
        {speakersList.map((speaker) => (
          <SpeakerCard speaker={speaker} key={speaker.name} horizontal={!horizontal}/>
        ))}
      </div>
    </div>
  );
};

export default SpeakersList;
