import { SiGithub } from "@icons-pack/react-simple-icons"
import googleIcon from "../assets/googleIcon.jpg"
import Button from "../Components/Button"
import SignPageCard from "../Components/SignPageCard"
import Input from "../Components/Input"
import LoginForm from "../Components/LoginForm"

function LoginPage(){
    return(
        <div className="flex ">
            <div className="w-[38%]" >
                <SignPageCard />
            </div>
            <div className="max-w-7xl m-25 mx-auto">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="mt-1 pb-7 text-gray-500">Sign in to your TrackerAI account</p>
                <div>
                    <Button className="text-gray-600 px-40 border-gray-300/70">
                        <img 
                        src={googleIcon}
                        alt="Google"
                        className="h-6 w-6"
                        />
                        <span>Continue with Google</span>
                        
                    </Button>
                    <Button className="text-gray-600 px-40 border-gray-300/70">
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