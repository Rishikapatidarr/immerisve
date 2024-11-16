import { Bell, Heart, Home, LogOut, MessageCircle, PlusSquare, Search, SearchIcon, Settings, Star, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'
import CreatePost from './CreatePost'






const LeftSideBar = () => {

  const navigate=useNavigate();
  const[open,setOpen]=useState(false)

  

  const sidebarHandler = (textType) => {
    if (textType === "Profile") {
      navigate("/profile");
  } else if (textType === "Home") {
      navigate("/");
      
  } 
  // else if(textType=== "C reate"){
  //   navigate("/create")
  // }
  else if(textType==="Create"){
    setOpen(true);
  }
}

const sidebarItems = [
  { icon: <Home/>, text: "Home" },
  { icon: <Search />, text: "Search" },
  { icon: <MessageCircle />, text: "Messages" },
  { icon: <Bell />, text: "Notifications" },
  { icon: <PlusSquare />, text: "Create" },
  // {
  //     icon: (
  //         <Avatar className='w-6 h-6'>
  //             <AvatarImage src={user?.profilePicture} alt="@shadcn" />
  //             <AvatarFallback>CN</AvatarFallback>
  //         </Avatar>
  //     ),
  //     text: "Profile"
  // },
  { icon: <Star />, text: "My collection" },
  { icon: <Settings/>, text: "Settings" },
]
  return (
    <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen bg-[#E1EFF1]'>
      <div className='flex flex-col'>
        <h1 className='mb-16 mt-6 text-3xl font-bold pl-3'>LOGO</h1>
        <div> 
      {
        sidebarItems.map((item,index)=>{
          return(
            <div key={index} onClick={() => sidebarHandler(item.text)} className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3 text-2xl'>
               {item.icon}
               <span>{item.text}</span>
            </div>

          )
        })
      }
      </div>
      </div>
      <CreatePost open={open} setOpen={setOpen} />
    </div>
  )
}

export default LeftSideBar
