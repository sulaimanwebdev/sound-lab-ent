import {useState} from 'react'

const Header = () => {
  const [menu, setmenu] = useState('translate-x-full');
  const [border, setborder] = useState('home');

  return (
    <>
    <div className="w-full">
      <div className="mainCont flex items-center justify-between gap-5 text-white py-2.5">
         <button><img src="/images/logo.svg" alt="logo" /></button>
         <div className={`${menu} lg2:translate-x-0 fixed top-0 right-0 lg2:relative lg2:top-auto lg2:right-auto lg2:w-auto w-full min-h-screen lg2:min-h-fit px-[25px] pt-16 bg-black lg2:bg-transparent lg2:pt-0 lg2:px-0 flex items-start lg2:items-center flex-col lg2:flex-row gap-10 transition`}>
            <a href="#home" className={`transition hover:-translate-y-[3px] uppercase border-main`}><div
             onClick={()=> {
              setborder('home')
              setmenu('translate-x-full')
             }}
            >Home</div></a>
            <a href="#services" className={`uppercase transition hover:-translate-y-[3px] border-main`}><div 
            onClick={()=> {
              setborder('services')
              setmenu('translate-x-full')
             }}
            >Services</div></a>
            <a href="#wedding" className={`uppercase transition hover:-translate-y-[3px] border-main`}><div 
            onClick={()=> {
              setborder('wedding')
              setmenu('translate-x-full')
             }}
            >Wedding</div></a>
            <a href="#about" className={`uppercase transition hover:-translate-y-[3px] border-main`}><div
            onClick={()=> {
              setborder('about')
              setmenu('translate-x-full')
             }}
            >About</div></a>
            <a href="#event" className={`uppercase transition hover:-translate-y-[3px] border-main`}><div
            onClick={()=> {
              setborder('event')
              setmenu('translate-x-full')
             }}
            >Event</div></a>
            <a href="#contact" className="btnBackground px-6 py-3 rounded-[4px] uppercase transition hover:-translate-y-[3px] text-black"><div
            onClick={()=> {
              setmenu('translate-x-full')
             }}
            >Contact us</div></a>
            <button onClick={()=> {setmenu('translate-x-full')}} className='flex lg2:hidden absolute top-5 right-5'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFE38F" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
         </div>

         <button onClick={()=> {setmenu('translate-x-0')}} className='flex lg2:hidden'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFE38F" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
      </div>
    </div>
    </>
  )
}

export default Header