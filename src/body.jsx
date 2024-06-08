import MyImage from "./image"
import Content from "./content"
export default function Bodymain() {
    return (
        <>
            <div className=" flex h-full sm:full  w-full ">
                <div className=" w-1/3 lg:block  hidden  bg-cover">
                    <MyImage />
                </div>
                <div className="w-full bg-slate-200 flex  items-center">
                    <Content/>
                </div>
            </div>

        </>
    )
}