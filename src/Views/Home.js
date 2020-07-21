import React from "react";
import Hello from "../Components/Hello";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">this is home</h1>
      <Hello name="Narek" />
    </div>
  );
}

export default Home;
