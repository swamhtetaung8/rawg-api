import Overlay from "../components/Overlay"
import { Loader } from "@mantine/core"
const Loading = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-green-900">
            <Overlay/>
            <Loader color="green" size="xl" variant="bars" />
    </div>
  )
}

export default Loading
