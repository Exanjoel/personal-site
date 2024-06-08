

export default function Footer() {

    return (
        <>
       
            <div className="flex direction-col justify-between">
                <div>
                    <h3>copyright <span className="mx-1"><i class="fa-regular fa-copyright"></i></span>2024</h3>
                </div>
                <div>
                    <ul className="flex direction-col">
                        <li className="mx-1"><button><i class="fa-brands fa-facebook"></i></button></li>
                        <li className="mx-1"><button><i class="fa-brands fa-instagram"></i></button></li>
                        <li className="mx-1"><button><i class="fa-brands fa-x-twitter"></i></button></li>
                        <li className="mx-1"><button><i class="fa-brands fa-whatsapp"></i></button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}