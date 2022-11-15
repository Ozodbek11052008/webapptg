import logo from './logo.svg';
import './App.css';
const tg = window.Telegram.WebApp;
import { React, useEffect } from "react";
function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onclose = () => {
    tg.close()
  }
  return (
    <>
      work
      <button>Close</button>
    </>
  );
}

export default App;
