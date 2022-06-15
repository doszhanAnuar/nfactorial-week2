import { useState } from "react";
import "./App.css";
import { format } from "date-fns";
import { NavigationBar } from "./NavigationBar";
function App() {
  const [counter, setCounter] = useState(0);
  const age = 20;
  return (
    <>
      <NavigationBar />
      <div className="background-image d-flex container-fluid">
        <div className="img1 img d-flex container-fluid container-lg justify-content-center align-items-center">
          <h1>Hey</h1>
        </div>
        <div className=" img img2 d-flex container-fluid container-lg justify-content-center align-items-center">
          <h1>Let's</h1>
        </div>
        <div className=" img3 img d-flex container-fluid container-lg justify-content-center align-items-center">
          <h1>Give</h1>
        </div>
        <div className=" img4 img d-flex container-fluid container-lg justify-content-center align-items-center">
          <h1>All</h1>
        </div>
        <div className=" img5 img d-flex container-fluid container-lg justify-content-center align-items-center">
          <h1>You can</h1>
        </div>
      </div>
    </>
  );
}

export default App;
