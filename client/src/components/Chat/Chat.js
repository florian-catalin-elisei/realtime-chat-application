import { useState, useEffect } from "react";
import { TopMenu, ChatBody, InputSection } from "../../components";
import socket from "../../socket";
import queryString from "query-string";
import "./Chat.css";

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const { name, room } = parsed;

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.off("disconnect");
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", { user: name, text: message }, () => {
        setMessages((prevMessages) => [...prevMessages, { user: name, text: message }]);
        setMessage("");
      });
    }
  };

  return (
    <div className="Chat">
      <div className="Chat-container">
        <TopMenu room={room} />
        <ChatBody messages={messages} name={name} />
        <InputSection message={message} handleChange={handleChange} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
