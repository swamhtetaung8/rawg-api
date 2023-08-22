import { useGameContext } from "../context/GameContext"
import TrendingCard from "./TrendingCard"


const TrendingContainer = () => {
  const {games} = useGameContext()
  console.log(games)
  return (
    
    <div className="grid grid-cols-2 gap-3 my-10 md:grid-cols-3 lg:grid-cols-6">
      {games?.results?.slice(0,6).map(game=><TrendingCard key={game.id} game={game}/>)}
    </div>
   
  )
}

export default TrendingContainer
