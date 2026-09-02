import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({
    label,
    type="text",
    placeholder="",
    className="",
    ...props
} , ref){
    const id = useId();
    return(
        
        <div className="w-full mb-4">
            {label && <label
                htmlFor={id}
                className="block mb-1 pl-1 font-medium text-small text-gray-700"
            >
                {label}
                
                </label>}
                <input
                id={id}
                ref={ref}
                className={`w-full border border-gray-300 rounded-lg text-gray-900 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:border-2 shadow-sm transition-all duration-200 ${className}`}
                {...props}
                placeholder={placeholder}
                type={type}
                />
        
        </div>
    )
})

export default Input;