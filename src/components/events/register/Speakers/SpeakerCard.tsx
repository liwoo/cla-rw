import React from "react";
import { Speaker } from "./SpeakersList";
import ClientImage from "@/components/ClientImage";

interface SpeakerCardProps {
  speaker: Speaker;
}
const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  return (
    <div className="flex flex-col items-center my-4 mx-4">
      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
        <ClientImage fill src={speaker.img} />
      </div>
      <div className="my-4">
        <div>{speaker.name}</div>
        <div className="font-light">{speaker.about}</div>
      </div>
    </div>
  );
};

export default SpeakerCard;
