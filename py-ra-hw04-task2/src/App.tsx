import TrainController from "./components/TrainController";
import DataTable from "./components/DataTable";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    0: 0,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date = (Date.UTC(Number(event.target[0].value.slice(6, 10)), Number(event.target[0].value.slice(3, 5)) - 1, Number(event.target[0].value.slice(0, 2))))/1000;
    const distance = Number(event.target[1].value);
    
    const oldDistance = (date: any) => {
      const old = Object.entries(value).find((el) => {
        if (Number(el[0]) === date) {
          return true
        } else {
          return false
        }
      })

      if (old === undefined) {
        return 0
      } else {
        return old[1]
      }
    }

    setValue((prevForm) => ({...prevForm, [date]: distance + oldDistance(date)}))
  };

  return (
    <>
      <TrainController handleSubmit={handleSubmit}/>
      <DataTable value={value}/>
    </>
  )
}

export default App;
