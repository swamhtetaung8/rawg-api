import PrimaryButton from "./Buttons/PrimaryButton"
import Overlay from "./Overlay"
import {AiOutlineArrowRight} from "react-icons/ai"
import sekiro from "/sekiro.png"

const Hero = () => {
  return (
    <section className=" min-h-screen w-full bg-[url('https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg')] bg-center bg-cover">
      <Overlay/>
      <div className="flex items-center layout-container min-h-screen relative z-10"> 
        <div className=" space-y-16 w-[600px]">
            <div className=" space-y-2">
                <h3 className=" text-primary font-semibold text-xl">Discover Games You Will Love</h3>
                <h1 className=" text-6xl font-bold text-white">Read About Games That You Enjoy</h1>
            </div>
            <PrimaryButton><div className="flex gap-3 items-center"><span>Start Exploring</span> <AiOutlineArrowRight className=" text-xl"/></div></PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
