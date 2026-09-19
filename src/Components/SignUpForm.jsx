import { useForm } from "react-hook-form"
import Input from "./Input"
import Button from "./Button"
import api from "../api/axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function SignUpForm(){
    const {register, handleSubmit,formState:{isSubmitting, errors}} = useForm({
        defaultValues:{
            username:"",
            email:"",
            password:""
        }
    })
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const submit = async(data) => {
        try {
            const response = await api.post("/api/auth/register" ,data)
            setSuccess(response.data);
            if(response.status === 200){
                setTimeout(() => {
                    navigate("/login");
                } , 2000)
            }

        } catch (error) {
            
            
        }
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
            label="Username"
            placeholder="Arif Rahman"
            {...register("username",{required:"username is required"})}
            />
            <Input
            label="Email"
            placeholder="arif@university.ac.uk"
            type="email"
            {...register("email",{required:"email is required"})}   
            />
            <Input
            label="Password"
            placeholder="password"
            type="password"
            {...register("password",{required:"password is required"})}
            />
            <Button 
            disabled={isSubmitting}
            type="submit"
            className="bg-indigo-500 mx-auto w-full mt-3 text-white hover:bg-indigo-600 active:scale-98"
            >
                {isSubmitting ? "Signing up ..." : "Sign up"}
                </Button>
            {success && (
            <p className='text-green-600 text-sm mb-3 bg-green-50 border border-green-100 rounded-lg px-4 py-3'>
            {success}
        </p>)}
        
        </form>
    )
}
export default SignUpForm