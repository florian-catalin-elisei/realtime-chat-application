import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import "./ChatBody.css";

const ChatBody = ({ messages, name }) => {
  return (
    <ScrollToBottom className="ChatBody">
      {messages.map((message, id) => (
        <div key={id}>
          <Message user={message.user} text={message.text} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default ChatBody;
