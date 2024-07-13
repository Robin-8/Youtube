import React from "react";
;

const ChatMessage = ({ name, message }) => {

  return (
    <div className="">
      <span className="font-bold p-2 ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
