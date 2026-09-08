import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../Slices/authSlice";

function LoginForm(){
    const {register, handleSubmit , formState: {isSubmitting , errors}} = useForm({
        defaultValues: {
            email : "",
            password: "",
        }
    

    });
    const [error , setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = async(data) => {
        try{
            const response = await api.post("/api/auth/login" , data);
            const token = response.data

            localStorage.setItem("token",token)
            const userResponse = await api.get("/api/auth/getCurrentUser")
            const user = userResponse.data

            dispatch(login(user))
            navigate("/")

            
        } catch(error) {
            setError(error.message);

        }


    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input   
            label="Email"
            placeholder="arif@university.ac.uk"
            type="email"
            error={errors.email?.message}
            {...register("email",{required: "Email is required"})}
            />
            <Input 
            label= "Password"
            placeholder="password"
            type="password"
            className="mb-4"
            error={errors.password?.message}
            {...register("password",{required: true})}

            />
            <Button 
            disabled={isSubmitting}
            type="submit"
            className="bg-indigo-500 mx-auto w-full mt-3 text-white hover:bg-indigo-600 active:scale-98"
            >
                {isSubmitting ? "Signing in ..." : "Sign in"}
                </Button>
                {error && (
                    <p className='text-red-500 text-md mb-4 mt-3 text-center
                     px-4 py-3'>
                        {error}
                    </p>
                )}
        
        </form>
    )

}
export default LoginForm
