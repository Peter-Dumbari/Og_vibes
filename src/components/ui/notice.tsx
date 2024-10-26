import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";

interface NoticeProps {
  title: string;
  message: string;
}

export default function Notice({ title, message }: NoticeProps): JSX.Element {
  return (
    <div className="notice-cont flex flex-row w-[100%] items-center bg-tabsBackground">
      <div className="title-box">
        <span>{title}</span>
      </div>
      <div className="message-box">
        <div className="flex items-center gap-3 message">
          <span>{message}</span>
          <StarIcon className="h-4 w-4 text-defaultText ml-5" />
        </div>
      </div>
    </div>
  );
}
