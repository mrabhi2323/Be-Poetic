import './App.css'
import Header from "./components/header/header"
import AddKeeper from "./components/addKeeper/addKeeper"
import ShowKeeper from "./components/showkeeper/showKeeper"
import { useState, useEffect  } from "react"
import axios from "axios"
import { Toaster } from 'react-hot-toast';

function App() {

  const [ keeperList, setKeeperList ] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/getAll")
    .then(res => setKeeperList(res.data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Toaster />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
