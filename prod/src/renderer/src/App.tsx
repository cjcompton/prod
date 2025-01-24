import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./components/AppLayout"
import SquareNote from "./components/SquareNote"

function App(): JSX.Element {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/page/:squareId" element={<SquareNote />}/>
      </Routes>
    </Router>
    {/* <div className="flex h-full items-center justify-center">
      <span className="text-4xl text-blue-500">Hello from Electron</span>
    </div> */}
   </>
  )
}

export default App
