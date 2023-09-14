import { useNavigate } from "react-router-dom";

export function useNav(){
    const navigate = useNavigate();

    const GetStarted = () =>{
        navigate('/');
    }

    const SignIn = () =>{
        navigate('/login');
    }

    const SignUp = () =>{
        navigate('/signup');
    }

    const Main = () => {
        navigate('/main')
    }
    
    return {
        GetStarted,
        SignIn,
        SignUp,
        Main
    };
}
   