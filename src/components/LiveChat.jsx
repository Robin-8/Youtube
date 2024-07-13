import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../slice/chatSlice";
import { randomMessageGenerator, randomNameGenerator } from "./helper";

const LiveChat = () => {
  const chatMessage = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("message");
      dispatch(
        addChat({
          name: randomNameGenerator(),
          message: randomMessageGenerator(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, [dispatch]);

  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //   }
  // }, [chatMessage]);

  return (
    <>
      <div className="w-full h-96 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div className="ml-2 flex flex-col">
          {chatMessage.map((c, index) => (
            <div key={index} className="flex items-center">
              <PersonIcon />
              <ChatMessage name={c.name} message={c.message} />
            </div>
          ))}
        </div>
      </div>
      <form 
        className="w-full border border-black p-1 flex" 
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: "Robin",
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input 
          className="flex-grow p-2 border" 
          type="text" 
          value={liveMessage} 
          onChange={(e) => setLiveMessage(e.target.value)} 
          placeholder="Type your message" 
        />
        <button className="bg-gray-300 p-2 rounded-md" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
