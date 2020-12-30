import React, { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState(
    "Default message's here. Should be replaced."
  );
  const fetchHello = () => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(({ message, timestamp }) => {
        setMessage(`${message}`);
      })
      .catch((error) => setMessage(`Error: ${error}`));
  };

  return (
    <>
      <h1>Fetching test page</h1>
      <p>{message}</p>
      <button onClick={fetchHello}>Fetch data from API</button>
    </>
  );
};

export default App;
