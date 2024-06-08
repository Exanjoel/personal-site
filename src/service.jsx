import { useState } from "react";


export  function Service(){

    return(

        <>
        <div>
            <div>
                <h4 className="font-bold">services</h4>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}

export function Service2(){


    const[show,setshow]=useState(0)


    return(
        <>
        {show==0?( <div><h4>service</h4></div>):null}
       
        <button onClick={()=>{
            setshow(0)
        }} type="button">show</button>
        <button type="button" onClick={()=>setshow(!show)}>hide</button>
        </>
    )
}

export function Service3(){

    return(
        <>
        <div>Service3</div></>
    )
}