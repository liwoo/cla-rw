import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import React from "react";

const ShareEvent = () => {
  return (
    <div>
      <div className="my-4 text-xl font-semibold">Share About Event</div>
      <div className="my-2 flex text-secondary">
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
