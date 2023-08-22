import PrimaryButton from "./Buttons/PrimaryButton"
import Overlay from "./Overlay"
import {AiOutlineArrowRight} from "react-icons/ai"

const Hero = () => {
  return (
    <section className=" min-h-screen w-full bg-[url('https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg')] bg-center bg-cover">
      <Overlay/>
      <div className="relative z-10 flex items-center min-h-screen layout-container"> 
        <div className=" space-y-16 w-[600px]">
            <div className="space-y-2 ">
                <h3 className="text-xl font-semibold  text-primary">Discover Games You Will Love</h3>
                <h1 className="text-6xl font-bold text-white ">Read About Games That You Enjoy</h1>
            </div>
            <PrimaryButton><div className="flex items-center gap-3"><span>Start Exploring</span> <AiOutlineArrowRight className="text-xl "/></div></PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
