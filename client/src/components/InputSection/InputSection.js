import "./InputSection.css";

const InputSection = ({ message, handleChange, sendMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  };

  const handleClick = (event) => {
    sendMessage(event);
  };

  return (
    <div className="InputSection">
      <form className="InputSection-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="InputSection-input"
            type="text"
            name="message"
            value={message}
            placeholder="Type a message..."
            autoComplete="off"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
        </div>

        <button className="InputSection-button" onClick={handleClick}>
          Send
        </button>
      </form>
    </div>
  );
};

export default InputSection;
