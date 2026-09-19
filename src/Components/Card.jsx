function Card({label, children, className}){
    return(
        <div className="bg-white text-center md:text-left p-5 w-full border border-gray-200 rounded-2xl">
            <p className="text-gray-600">{label}</p>
            <p className={`text-2xl font-bold pt-1 pb-1 ${className}`}>{children}</p>
    
        </div>
    )

}
export default Card