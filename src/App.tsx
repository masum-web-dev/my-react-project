import { Suspense } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Technologies from './Technology/Technologies'

function App() {

  const PromiseFetch = async () =>{
    const response = await fetch("/technologies.json")
    const data = await response.json()
    return data;
  }

  const techPromise = PromiseFetch();

  return (
    <div>
    <Navbar />
    <Banner />
    <Suspense fallback={<div className="text-center py-10 font-medium">Loading technologies...</div>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
    </div>
  )
}

export default App
