import React from 'react'
import style from './homePage.module.scss'



const PostConatinerComponent = ({createPost,txtArea,icon, userProfile}:{icon?:string; createPost?:string;txtArea:string; userProfile:any}) => {
  return (
  <div style={{display:'flex',flexDirection:'column'}}>
        <div className={style['create-post-container']}>
            <div className={style['wrap-profile']}>
            <div className={style['profile-picture']}>
            <img src={userProfile} alt="" />
        </div>
        <div className={style['create-post-text']}>{createPost}</div>
            </div>
       
        <div className={style['create-post-textArea']}>
            <div className={style['emoji-container']}>
                <div className={style['circle']}><div className={style['icon']}>{icon}</div></div>
            </div>
            <div className={style['textArea-content']}>{txtArea}</div>
        </div>
        <div className={style['post-button']}>
            Post</div>
       
      </div>
      </div>
  )
}

export default PostConatinerComponent
