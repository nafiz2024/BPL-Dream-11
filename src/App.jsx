import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000000)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <span className="loading loading-spinner text-error"></span>
      }>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

      <ToastContainer />
    </>
  )
}

export default App
