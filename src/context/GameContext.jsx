import { createContext, useContext, useEffect, useState } from "react";
import { getGames } from "../api/apiMethods";
import { useQuery } from "@tanstack/react-query";

const GameContext = createContext();

export const GameContextProvider = ({children}) => {

    const [games,setGames] = useState([]);

    const { isLoading, data } = useQuery(['getGames'], getGames);
    const providerData = {isLoadingGames:isLoading,games}

    useEffect(()=>{
        setGames(data)
    },[data])

    return <GameContext.Provider value={providerData}>{children}</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext);