
const SecondaryButton = ({children}) => {
  return (
    <button className=" bg-[#215e5d] px-6 py-3 text-white font-medium active:scale-105 transition-all duration-300 rounded-lg">
      {children}
    </button>
  )
}

export default SecondaryButton
