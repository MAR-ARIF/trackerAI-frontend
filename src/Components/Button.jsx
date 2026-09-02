

function Button({
    type="button",
    children,
    className,
    ...props
    
}){
    return(
         <button className={`flex items-center justify-center gap-3 px-2 py-2 border-1 rounded-lg mt-4 cursor-pointer transition-all duration-200 font-medium ${className}`} {...props} type={type}>
            {children}
        </button>
    )
}
export default Button