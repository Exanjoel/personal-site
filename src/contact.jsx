

export default function Contact() {

    return (

        <>

            <div className="bg-slate-200 p-5">
                <div>
                    <h4 className="font-bold uppercase">get in touch</h4>
                </div>
                <div className="block lg:flex justify-evenly">
                    <div className="w-3/12 h-40 flex justify-center items-center mt-5">
                        <i class="fa-solid fa-location-dot m-7"></i> <h5 className="capitalize font-bold">Kannayakumari,tamil nadu, India</h5>
                    </div>
                    <div className="w-3/12 h-40 flex justify-center items-center mt-5">
                        <i class="fa-solid fa-envelope m-7"></i><h5 className="font-bold">exanjoel07@gmail.com</h5>
                    </div>
                    <div className="w-3/12 h-40 flex items-center justify-center  mt-5">
                        <i class="fa-solid fa-phone m-5"></i><h5 className="font-bold">9791820805</h5>
                    </div>
                </div>
                <div>
                    <div className="border-2">
                        <div>
                            <input type="name" className="border-6 m-5 h-11 p-2" placeholder="Name"></input>
                        </div>
                        <div>
                            <input type="email" className="border-6 m-5 h-11 p-2" placeholder="email"></input>
                        </div>
                        <div>
                            <input type="text" className="border-6 m-5 h-11 p-2" placeholder="message"></input>
                        </div>
                        <div>
                            <button type="button" className="text-white bg-black p-4 rounded m-5">send message</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}