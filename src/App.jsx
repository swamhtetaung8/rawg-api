import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import Routes from './Routes/Routes'
import { GameContextProvider } from "./context/GameContext";
const App = () => {

  const queryClient = new QueryClient();

  return (
    <main className="font-sans">
      <QueryClientProvider client={queryClient}>
        <GameContextProvider>
          <Routes/>
        </GameContextProvider>
      </QueryClientProvider>
    </main>
  )
}

export default App
