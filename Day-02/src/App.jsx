import './App.css'
import PropsandStateInfo from './components/PropsandStateInfo'
import ReusableComponent from './components/ReusableComponent'
import Button from './components/ui/Button'
import LikeMe from './components/ui/LikeMe'
import Navbar from './components/views/Navbar'
import About from './components/views/about'

const func = () => alert("on button event ")

function App() {
  

  return (
    <>
    <main className=' bg-slate-800  text-white   '>
      <Navbar />

      <div className='pt-24'>
 <ReusableComponent  name="ghous" />
 <LikeMe />
      </div>

      <div className='pt-44 text-slate-400 text-center hover:text-slate-500 cursor-pointer'>
<Button onclick={func}> Click Me! : I Am Reusable Button  </Button>
      </div>

 
 <div>
  <PropsandStateInfo />
 </div>

<div><About /></div>
    </main>
    </>
  )
}

export default App
