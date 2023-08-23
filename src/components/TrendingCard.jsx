import {AiFillFire} from "react-icons/ai"
const TrendingCard = ({game}) => {
  return (
    <div className=''>
        <a href="#" className="relative block h-[250px] overflow-hidden bg-black group rounded-xl">
        <img
            alt={game.name}
            src={game.background_image}
            className="absolute inset-0 object-cover object-center w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="">
            <div
                className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
                <p className="text-lg font-medium text-center text-white">
                {game.name}
                </p>
            </div>
            </div>
        </div>
        </a>
        <p className='flex items-center justify-center gap-2 mt-3 text-xl font-medium text-white'><AiFillFire className="text-white "/><span>{game.rating.toFixed(1)}/5</span></p>
    </div>
  )
}

export default TrendingCard
