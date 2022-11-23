import React from 'react'
import "./feed.css"
function Feed() {
  return (
    <>
      <div className="header">
      <img src="
        https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png
        " alt="" className="insta_img" />
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGpkOhk79aNvQ/profile-displayphoto-shrink_100_100/0/1658416345364?e=1674691200&v=beta&t=1ZTC4OaU9mAXl9pXgCzT-39pA-AecSsTZzhphg3iRGc"
          alt=""
          className="profile_img" />
      </div>
      <div className="main_container">
      <div className="upload_container">
        <i class="movie_icon fa-solid fa-clapperboard"></i>
        <div className="upload_text">UPLOAD</div>
      </div>
      <div className="reels_container">Reels</div>
      </div>
      

    </>
  )
}

export default Feed