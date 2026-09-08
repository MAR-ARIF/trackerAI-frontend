import { Sparkles } from "lucide-react";

function Logo({
    className
}){
    return (
        <div className="flex items-center gap-4">
          <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${className} `}>

            <Sparkles size={22}  />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            TrackerAI
          </h1>
        </div>
    )
}
export default Logo;