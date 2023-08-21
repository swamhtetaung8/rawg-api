const PrimaryButton = ({children}) => {
  return (
    <button className=" bg-gradient-to-r from-[#77df7c] to-[#5c7a5d] px-6 py-3 text-white font-medium active:scale-105 transition-all duration-300 rounded-lg">
      {children}
    </button>
  )
}

export default PrimaryButton
