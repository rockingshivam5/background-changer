import { useState } from "react";
import Button from "./Button";


function App() {

  const [color, setColor] = useState("green");

  return (
    <>
      <div className="w-full h-screen absolute" style={{ backgroundColor: color }}  >
        <div className="w-9/12 h-[50px] bg-gray-500 mt-[700px] mx-auto rounded-lg flex justify-evenly">

          <Button text={"Pink"} color={"pink"} setColor={setColor} />
          <Button text={"Red"} color={"red"} setColor={setColor} />
          <Button text={"Green"} color={"green"} setColor={setColor} />
          <Button text={"Blue"} color={"blue"} setColor={setColor} />
          <Button text={"Yellow"} color={"yellow"} setColor={setColor} />

        </div>
      </div>
    </>
  )
}

export default App
