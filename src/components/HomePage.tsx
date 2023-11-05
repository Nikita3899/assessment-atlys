import React, { useState } from 'react'
import style from './homePage.module.scss'
import PostConatinerComponent from './PostConatinerComponent'
import profile1 from '../assets/Ellipse 2.svg'
import profile2 from '../assets/Ellipse 2 (1).svg'
import LogInComponent from '../components/FormComponent'

const HomePage = ({userName} : {userName : string}) => {
    const [isLoggedOut, setIsLogout] = useState(false)
    const handleLogout = () => {
        setIsLogout(true)
    }
 
  return (
    <>
    {isLoggedOut ? (<LogInComponent />) : (<div className={style["wrapper"]}>
      <div className={style['logOut-text']} onClick={handleLogout}>Log out</div>
      <div className={style['greetings']}>Hello {userName}</div>
      <div className={style['header-text']}>How are you doing today? Would you like to share something with the community 🤗</div>
      <PostConatinerComponent  userProfile={''} txtArea='How are you feeling today?' createPost='Create post' icon={"💬"}/>
      <PostConatinerComponent  userProfile={profile1} txtArea='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' createPost='Theresa Webb' icon={"👋"}/>
      <PostConatinerComponent  userProfile={profile2} txtArea='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' createPost='Marvin McKinney' icon={"😞"}/>
      </div>)}
      
    </>  
  )
}

export default HomePage
