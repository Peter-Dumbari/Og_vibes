import React from "react";
import "../../styles/components/_headNotice.scss";

interface NoticeProps {
  title: string;
  message: string;
}

export default function Notice({ title, message }: NoticeProps): JSX.Element {
  return (
    <div className="flex flex-row">
      <div className="title-box ">
        <span className="text-red-500">{title}</span>
      </div>
      <div className="message-box">
        <span>{message}</span>
      </div>
    </div>
  );
}
