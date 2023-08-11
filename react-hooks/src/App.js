import React, { useState , useEffect} from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  // const [count, setCount] = useState(1);
  // const [name, setName] = useState("");

  // const handleCountUpdate = () => {
  //   setCount(count + 1);
  // };

  // const handleInputChange = (e) => {
  //   setName(e.target.value);
  // }

  // //랜더링 될 때마다 실행되는 함수를 useEffect로 구현
  // useEffect(() => {
  //   console.log("랜더링");
  // }, []);

  // useEffect(() => {
  //   console.log("count 변화");
  // }, [count]);

  // useEffect(() => {
  //   console.log("name 변화");
  // }, [name]);

  return (
    <div>
      {showTimer && <Timer />}
      {/* showTimer를 사용할 때만 Timer를 보여주겠다!! */}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>



      {/* <button onClick={handleCountUpdate}>
        Update
      </button>
      <span>count: {count} </span>
      <br />
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name : {name}</span> */}
    </div>
  );
}

export default App;