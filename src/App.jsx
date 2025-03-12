import { useEffect, useState } from "react"
import About from "./Component/Home/About"
import Academic from "./Component/Home/Academic"
import Banner from "./Component/Home/Banner"
import Contact from "./Component/Home/Contact"
import Footer from "./Component/Home/Footer"
import Project from "./Component/Home/Project"
import Skill from "./Component/Home/Skill"
import Navbar from "./Component/Navbar/Navbar"
import Loader from "./Component/Loader/Loader"


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2500);
  },[])

  return (
    <>
    {
      isLoading ? <Loader></Loader> :     <div className="overflow-x-hidden">

      <Navbar></Navbar>
      <Banner></Banner>
      {/* <div className="bg-gradient-to-r from-indigo-400 from-10% via-sky-200 via-30% to-emerald-100 to-90%"> */}
   
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Academic></Academic>
      <Contact></Contact>
      {/* </div> */}
      <Footer></Footer>
       </div>
    }

   
    </>
  )
}

export default App
