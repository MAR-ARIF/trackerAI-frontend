import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function LoginForm(){
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email : "",
            password: "",
        }

    });
    const submit = async(data) => {


    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input   
            label="Email"
            placeholder="arif@university.ac.uk"
            type="email"
            {...register("email",{required: true})}
            />
            <Input 
            label= "Password"
            placeholder="password"
            type="password"
            className="mb-4"
            {...register("password",{required: true})}

            />
            <Button 
            children="Sign in"
            type="submit"
            className="bg-indigo-500 mx-auto px-58 mt-3 text-white hover:bg-indigo-600 active:scale-98"
            />
        
        </form>
    )

}
export default LoginForm
