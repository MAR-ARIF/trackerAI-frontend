import { SiGithub } from "@icons-pack/react-simple-icons"
import googleIcon from "../assets/googleIcon.jpg"
import Button from "../Components/Button"
import SignPageCard from "../Components/SignPageCard"

import LoginForm from "../Components/LoginForm"
import Logo from "../Components/Logo"

function LoginPage(){
    return(
        <div className="flex ">
            <div className="hidden md:block md:w-[38%]" >
                <SignPageCard />
            </div>
            <div className="w-full md:w-[62%] px-17 md:px-40 m-25 mx-auto">
                <div className="md:hidden flex justify-center mb-5" >
                    <Logo className="bg-indigo-500 text-white" />
                </div>
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="mt-1 pb-7 text-gray-500">Sign in to your TrackerAI account</p>
                <div>
                    <Button className="text-gray-600 w-full border-gray-300/70">
                        <img 
                        src={googleIcon}
                        alt="Google"
                        className="h-6 w-6"
                        />
                        <span>Continue with Google</span>
                        
                    </Button>
                    <Button className="text-gray-600 w-full border-gray-300/70">
                        <SiGithub size={22} />
                        <span>Continue with GitHub</span>
                        
                    </Button>
                </div>
                <div className="flex items-center gap-6 pt-5">
                    <div className="h-px flex-1 bg-gray-300"></div>

                    <span className="text-lg text-gray-400">or</span>

                    <div className="h-px flex-1 bg-gray-300"></div>
                </div>
                <div className="mt-5">
                    <LoginForm />
                </div>
  
            </div>

        </div>
    )
}
export default LoginPage