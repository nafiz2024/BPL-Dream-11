import { Suspense } from 'react'
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players'
import Navbar from './components/Navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <span className="loading loading-spinner text-error"></span>
      }>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
