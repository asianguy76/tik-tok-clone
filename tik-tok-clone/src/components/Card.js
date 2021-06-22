import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faHeart, faShareSquare} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCommentDots, faHeart, faShareSquare)



const Card = ({ user, toggleFollow }) => {

  const timestamp = user.timestamp
  const timeStampReformat = timestamp.slice(2, 7)

  return (
    <div className="card">
      <div className="break" />
        <div className="section">
          <div className="user-info">
            <img className="user-profile"  src={user.avatar} width={'100%'} />
            <div>
            <div className="section">
              <h3 className="bold">{user.username}</h3>
              <p className="username">{user.name}</p>
              <p>{timeStampReformat}</p>
            </div> 
            <p>{user.caption}</p>
            </div>
          </div>
          {user.button_visible && <div className={user.is_followed? "followed-button" : "follow-button"}
            onClick={() => toggleFollow(user)}>
              {user.is_followed? "Following": "Follow"}
          </div>}
        </div>
        <video className="video" controls>
          <source src={user.video} type="video/mp4" />
        </video>
        <div className="section socials">
     
           <FontAwesomeIcon icon={faHeart} />
          <div className="social-tag">{user.likes}</div>
          <FontAwesomeIcon icon={faCommentDots} />
          <div className="social-tag">{user.comments}</div>
          <FontAwesomeIcon icon={faShareSquare} />
        </div>
    </div>
  )
}

export default Card

