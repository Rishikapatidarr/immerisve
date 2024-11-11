import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const LogIn = () => {
  const [input, setInput] = useState({
    username: "",

    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const signupHandler = (e) => {
    e.preventDefault();
    toast.success("LogIn successful");
    console.log(input);

    setInput({
      username: "",

      password: "",
    });
  };
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

        <Button
          type="submit"
          className="bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900"
        >
          
          LogIn
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
