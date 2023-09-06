import Navbar from './pages/navbar'
import Bloco from './pages/bloco'
import Bloco2 from './pages/bloco2'
import Bloco3 from './pages/bloco3'
import Bloco4 from './pages/bloco4'
import Bloco5 from './pages/bloco5'
import Bloco6 from './pages/bloco6'
import Bloco7 from './pages/bloco7'
import Amostra from './pages/amostra'
function App() {


  return (
    <>
      <div className='header'>
        <Navbar />
      </div>

      <div className='bloco'>

      </div>
      <Bloco />
      <Bloco2 />
      <Bloco3 />
      <Bloco4 />
      <Bloco5 />
      <Bloco6 />
      <Amostra/>
      <Bloco7 />
    </>
  )
}

export default App
