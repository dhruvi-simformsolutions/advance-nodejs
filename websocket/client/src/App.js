import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// Establish socket connection
const socket = io("http://localhost:5000");

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("messagesmessages", messages);
  useEffect(() => {
    // Listen for incoming messages
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      // Cleanup when the component unmounts
      socket.off("chatMessage");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      // Send message to the server
      socket.emit("chatMessage", message);
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
