import React from 'react';
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { toggleGptSearchView } from '../Utils/gptSlice';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user= useSelector((store)=>store.user);
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((user)=>{
            if(user){
                const {uid,email,displayName}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                // User is signed in, you can access user information here
                console.log("User is signed in:", user);
                navigate("/browse")
            }else{
                // User is signed out
                dispatch(removeUser());
                navigate("/")
                console.log("User is signed out");
            }
        });
        return ()=>unsubscribe();
    },[])
    
    const handleSignout=()=>{
        // Sign out logic here
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log("Can not sign out now, please try again later",error)
          });
        console.log("Sign out clicked");
    }
    const handleGptToggle=()=>{
        dispatch(toggleGptSearchView());
    }
    return (
        <div className='absolute p-8 bg-gradient-to-b from-black z-10 flex justify-between w-full'>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className='w-44'/>
            {user && 
            <div className="p-2 m-2 flex justify-center items-center">
            <button onClick={handleGptToggle} className="p-2 m-2 text-white rounded-sm bg-transparent border border-white">GPT Search</button>
             <img alt="Sign out" 
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                onClick={handleSignout}
                className='w-12 h-12 cursor-pointer rounded-md'
                />
            </div>}
        </div>
        
    );
};

export default Header;