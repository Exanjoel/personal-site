import React, { useState } from 'react';
export default function Header() {

 const [show, setshow] = useState(false);
    function clickbutton() {
        
        setshow(!show)
    } 

    return (


        <>
            <div className="block lg:flex justify-between items-center my-6  ">
                <div className="font-sans text-2xl font-bold  tracking-widest flex flex-row justify-between">
                    <h1>HELLO</h1>
                    <div className="block lg:hidden pr-5">
                        <button type='button' onClick={clickbutton}><i class="fa-solid fa-bars"></i></button>
                    </div>
                </div>
                <div className=" items-center font-medium  ">


                    {show && (
                        <ul className=" flex flex-col items-end" id='nav_content'>
                            <a href='./home'><li><button type="button" className="mx-8 ">HOME</button></li></a>
                            <a href='./about'><li><button type="button" className="mx-8"> ABOUT</button></li></a>
                            <li><button type="button" className="mx-8">SERVICE</button></li>
                            <li><button type="button" className="mx-8">PROJECTS</button></li>
                            <a href='./contact'><li><button type="button" className="mx-8">CONTACT</button></li></a>
                        </ul>)}

                        <ul className=" lg:flex  hidden lg:block" id='nav_content'>
                            <a href='./home'><li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-300 duration-300'><button type="button" className="mx-8 ">HOME</button></li></a>
                            <a href='./about'><li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-300 duration-300'><button type="button" className="mx-8"> ABOUT</button></li></a>
                            <a href='./home'><li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-200 duration-300'><button type="button" className="mx-8 ">SERVICE</button></li></a>
                            <a href='./home'><li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-200 duration-300'><button type="button" className="mx-8 ">PROJECTS</button></li></a>
                            <a href='./contact'><li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-200 duration-300'><button type="button" className="mx-8">CONTACT</button></li></a>
                        </ul>

                </div>
            </div>

        </>
    )
}