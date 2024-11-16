import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const LogIn = () => {
  const [input, setInput] = useState({
    username: "",

    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.success("LogIn successful");
    console.log(input);
    setLoading(false);
    navigate("/");

    setInput({
      username: "",

      password: "",
    });
  };
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <form
        onSubmit={signupHandler}
        className="shadow-lg flex flex-col gap-5 p-12  "
      >
        <div className="my-4">
          <h1 className="text-center font-bold text-xl my-2">LOGO</h1>
          <p className="text-sm text-center">
            Welcome to our website Sign Up for More Information
          </p>
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
          <Label className="text-base">Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
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
          LogIn
        </Button>)
        }

        
        <span className="text-center text-xl">
          {" "}
          Dosen't have an account?{" "}
          <Link to="/signup" className="text-blue-600 no-underline">
            SignUp
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
