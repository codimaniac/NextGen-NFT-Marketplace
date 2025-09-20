import './button.css'

const Button = ({children, className}) => {
  return (
    <button className={`!pt-[8px] !pb-[8px] !pl-[24px] !pr-[24px] cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button