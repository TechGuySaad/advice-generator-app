import Divider from './assets/images/pattern-divider-desktop.svg'
import Dice from './assets/images/icon-dice.svg'
import useAdvice from './customHook/useAdvice'

function App() {

  const [advice,fetchAdvice] = useAdvice('https://api.adviceslip.com/advice')
  console.log(advice && advice.id)

  return (
    <>
    <div className="app w-full h-screen flex justify-center items-center">

      <div className="card h-fit rounded-lg flex flex-col justify-center items-center w-fit gap-y-6 px-10 pt-10 pb-2">
      <h1 className="text-md font-semibold">ADVICE #{advice && advice.slip.id}</h1>
      <h2 className="text-2xl flex w-full justify-center items-center text-center font-semibold">
      {advice && advice.slip.advice}
      </h2>

      <img src={Divider} alt="divider" />

     <button className='rounded-full  w-12 h-12 flex justify-center items-center transition-colors delay-500 ease-in-out' onClick={fetchAdvice}>
     <img src={Dice} alt="dice" className='w-4'/>

     </button>

      


      </div>

     

    </div>
    </>
  )
}

export default App
