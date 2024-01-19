import { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else {
      setRoom(value);
    }
  };

  const handleClick = (event) => {
    if (!name || !room) {
      event.preventDefault();
    }
  };

  return (
    <div className="Join">
      <h1 className="Join-heading">Join</h1>

      <div>
        <form>
          <div>
            <input
              className="Join-input"
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              className="Join-input"
              type="text"
              name="room"
              placeholder="Room"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <Link to={`/chat?name=${name}&room=${room}`}>
            <button className="Join-button" type="submit" onClick={handleClick}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
