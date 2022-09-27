
import { count } from "console";
import { useEffect, useState } from "react";

function useAge() {
  
  const [counter, setCounter] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("just now")

  function reset() {
    setCounter(0)
    setLastUpdate("just now")
   }
  useEffect(() => {
    const timer = setInterval(() => {
       setCounter(counter => counter + 1);
    },1000);
    return () =>{
      clearInterval(timer);
    }
  },[]);

  useEffect(()=>{
    if (counter > 10 && counter < 60) {
      return setLastUpdate("a few seconds ago")
    } else if (counter > 60) {
      const minutes = Math.floor(counter / 60)
      return setLastUpdate( minutes + "minute(s) ago")
    }
  })
  
  return {counter, lastUpdate, reset}
  
};

export { useAge };
