import React from "react";

function FetchAPI() {
  const api = () => {
    fetch("https://0cf3-14-99-167-142.in.ngrok.io")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      MY API <br />
      <button>Fetch api</button>
    </div>
  );
}

export default FetchAPI;