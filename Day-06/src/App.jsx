
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Homes from './pages/Homes'
import About from "./pages/About"
// import Navbar from './component/Navbar'
import Contact from './pages/Contact'
import OurMission from './pages/OurMission'
import ViewPages from './pages/ViewPages'
import PageNotFound from './pages/PageNotFound'
import Layout from "./pages/Layout"




function App() {
  
  return (
      <>
    

     
      
  

  
  <Routes > 
  <Route path='/' element={<Layout />}>
    <Route index element={<Homes /> } />
    <Route path="/About"  element={ <About/> } />
    <Route path="/Contact"  element={ <Contact/>} />
    <Route path="/Our-Mission"  element={ <OurMission />} />
    <Route path="/View-Pages"  element={ <ViewPages />} />
    <Route path="*" element={ <PageNotFound />} />
  </Route>
  


   
   
   
  

    </Routes> 

  </>
  )
}

export default App
