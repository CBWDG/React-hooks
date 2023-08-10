import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ['백승범', '박현우'];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return([input, ...prevState]);
    });
  };




  // const [time, setTime] = useState(1);
  
  // const handleClick = () => {
  //   let newTime;
  //   if (time >= 12) {
  //     newTime = 1;
  //   } else {
  //     newTime = time + 1;
  //   }
  //   setTime(newTime);
  // };

  // const dhandleClick = () => {
  //   let newTime;
  //   if (time <= 1) {
  //     newTime = 12;
  //   } else {
  //     newTime = time - 1;
  //   }
  //   setTime(newTime);
  // }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}




      {/* <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Uptime</button>
      <button onClick={dhandleClick}>Downtime</button> */}
    </div>
  )
}

export default App;