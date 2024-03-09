import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import clsx from "clsx";
import React from "react";

const ShareEvent = ({center=false}:{center?:boolean}) => {
  return (
    <div className={clsx(center && "text-center")}>
      <div className="my-4 text-xl font-semibold">Share About Event</div>
      <div className={clsx(center && "justify-center","my-2 flex text-secondary")}>
        <div className="w-8">
          <Twitter />
        </div>
        <div className="w-8">
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default ShareEvent;
