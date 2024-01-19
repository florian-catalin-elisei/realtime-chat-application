import ReactEmoji from "react-emoji";
import "./Message.css";

const Message = ({ user, text, name }) => {
  if (user === name) {
    return (
      <div className="Message justifyEnd">
        <div className="Message-text-container backgroundBlue">
          <p className="colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Message">
        <div className="Message-text-container">
          <p>{ReactEmoji.emojify(text)}</p>
        </div>

        <p className="Message-user pl-10">{user}</p>
      </div>
    );
  }
};

export default Message;
