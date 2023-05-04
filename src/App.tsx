import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Diisconnecting");

function App() {
  useEffect(() => {
    connect();

    // Return function to clean up once react unmounts the component
    return () => disconnect();
  });

  return <div></div>;
}

export default App;
