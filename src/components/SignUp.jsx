import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    profession: "",
    aboutYou: "",
  });
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);
  const navigate=useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.success("sign Up successful");
    console.log(input);
    setLoading(false);
    navigate("/")

    setInput({
      fullname: "",
      username: "",
      email: "",
      password: "",
      profession: "",
      aboutYou: "",
    });

    
  };


//   useEffect(()=>{
//     if(user){
//         navigate("/");
//     }
// },[])
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <form
        onSubmit={signupHandler}
        className="shadow-lg flex flex-col gap-5 p-12 w-[36rem] "
      >
        <div className="my-4">
          <h1 className="text-center font-bold text-xl my-2">LOGO</h1>
          <p className="text-sm text-center">
            Welcome to our website Sign Up for More Information
          </p>
        </div>
        <div>
          <Label className="text-base">Full Name</Label>
          <Input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <Label className="text-base">username</Label>
          <Input
            type="text"
            name="username"
            value={input.username}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <Label className="text-base">Email</Label>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <Label className="text-base">Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <Label className="text-base">profession</Label>
          <Input
            type="text"
            name="profession"
            value={input.profession}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <Label className="text-base">About you</Label>
          <Input
            type="text"
            name="aboutYou"
            value={input.aboutYou}
            onChange={changeEventHandler}
            className="focus-visible:ring-transparent my-2"
          />
        </div>
        {
          loading?(<Button>
            <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
            Please wait
        </Button>):(<Button
          type="submit"
          className="bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900"
        >
          SignUp
        </Button>)
        }

        <span className="text-center text-xl">
          {" "}
          already have an account?{" "}
          <Link to="/login" className="text-blue-600 no-underline">
            LogIn
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
