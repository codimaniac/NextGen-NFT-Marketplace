const Button = ({children, className}) => {
  return (
    <button className={`py-[8px] px-[24px] cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button