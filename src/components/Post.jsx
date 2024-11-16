import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal, Send } from "lucide-react";
import { FaHeart, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import CommentDialog from "./CommentDialog";

const Post = () => {

  const [text, setText] = useState("");
  const[open, setOpen]=useState(false);
  const changeEventHandeler=(e)=>{
    const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        } else {
            setText("");
        }
  }
  return (
    <div className="my-10 w-full max-w-sm mx-auto ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src=" https://github.com/shadcn.png"
              alt="post_image"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>username</h1>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <MoreHorizontal className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className=" bg-[#ffff] flex flex-col items-center text-sm text-center">
            <button
              variant="ghost"
              className="bg-[#ffff] p-3 rounded-xl text-2xl cursor-pointer text-[#ED4956] font-bold w-fit"
            >
              unfollow
            </button>
            <button
              variant="ghost"
              className="bg-[#ffff] border-none text-2xl cursor-pointer  w-fit"
            >
              Add to favourite
            </button>
            <button
              variant="ghost"
              className="bg-[#ffff] border-none text-2xl cursor-pointer  w-fit"
            >
              Delete
            </button>
          </DialogContent>
        </Dialog>
      </div>

      <img
        className="rounded-sm my-2 w-full aspect-square object-cover"
        src="https://plus.unsplash.com/premium_photo-1730745779969-e7768f4506c5?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="post_image"
      />

      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-3">
          <FaRegHeart size={"24"} className="cursor-pointer text-red-600" />
          <FiMessageCircle
            size={"22"}
            onClick={()=>setOpen(true)}
            className="cursor-pointer hover:text-gray-600"
          />

          <IoSendSharp
            size={"22"}
            className="cursor-pointer hover:text-gray-600"
          />
        </div>

        <FaRegBookmark
          size={"22"}
          className="cursor-pointer hover:text-gray-600"
        />
      </div>
      <span className="font-medium block mb-2">1k likes</span>
      <p>
        <span className="font-medium mr-2">username</span>
        "Adventure awaits around every corner."
      </p>
      <span onClick={()=>setOpen(true)} className='cursor-pointer text-sm text-gray-400'>view all 10 comments</span>
      <CommentDialog open={open} setOpen={setOpen}/>
      <div className='flex items-center justify-between'>
        <input
          type="text"
          placeholder="add a comment..."
          value={text}
          onChange={changeEventHandeler}
          className="outline-none text-sm w-full"
        />
        {
          text && <span className='text-[#3BADF8]'>Post</span>
        }
      </div>
    </div>
  );
};

export default Post;
