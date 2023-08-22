import Layout from "../Layout"
import Hero from "../components/Hero"
import Trending from "../components/Trending"
import { useGameContext } from "../context/GameContext"
import Loading from "../components/Loading"

const Home = () => {
  const {isLoadingGames} = useGameContext();
  return (
    <>
    {isLoadingGames ? (
          <Loading/>
        ):(
          <Layout>
            <Hero/>
            <Trending/>
          </Layout>
        )}
    </>
  )
}

export default Home
