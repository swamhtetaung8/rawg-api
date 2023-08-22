import { Loader } from "@mantine/core"
import Layout from "../Layout"
import Hero from "../components/Hero"
import Overlay from "../components/Overlay"
import Trending from "../components/Trending"
import { useGameContext } from "../context/GameContext"

const Home = () => {
  const {isLoadingGames} = useGameContext();
  return (
    <>
    {isLoadingGames ? (
          <div className="relative flex items-center justify-center w-full h-screen bg-green-900">
            <Overlay/>
            <Loader color="green" size="xl" variant="bars" />
          </div>
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
