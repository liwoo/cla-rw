import React from "react";
import { Speaker } from "./SpeakersList";
import ClientImage from "@/components/ClientImage";
import clsx from "clsx";

interface SpeakerCardProps {
  speaker: Speaker;
  horizontal?:boolean
}
const SpeakerCard = ({ speaker,horizontal=false }: SpeakerCardProps) => {
  return (
    <div className={clsx(horizontal?"flex items-center": "flex flex-col mx-4 flex-wrap","my-4 items-center")}>
      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
        <ClientImage fill src={speaker.img} />
      </div>
      <div className={clsx(horizontal?"":"flex flex-col items-center my-4")}>
        <div>{speaker.name}</div>
        <div className="font-light">{speaker.about}</div>
      </div>
    </div>
  );
};

export default SpeakerCard;
