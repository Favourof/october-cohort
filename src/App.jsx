import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Contact } from "./Pages/Contact"
import { Dashboard } from "./Pages/Dashboard"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { PageNotFound } from "./Pages/PageNotFound"




function App() {




  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h1>THe home page</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </div>

  )
}

export default App

