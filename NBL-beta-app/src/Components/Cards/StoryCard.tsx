
import DateFormatZh from "../../Functions/DateFormat";
import "./StoryCard.scss"

import { Link } from "react-router-dom";


export default function StoryCard(props: any) {
  const story = props.story

  return (<>
  
    <Link to={`/${story.info.key}`} className={`story-card ${props.className}`}>
      <div className="story-cover-container">
        <div className="img" style={{backgroundImage: `url(${story.info.cover})`}}>
        </div>
      </div>
      <div className="story-info-container">
        <div className="story-info">
          <div className="story-title">
            {story.info.title}
          </div>
          <div className="story-brief">
            {story.info.brief}
          </div>
          <div className="story-author-info-container">
            {story.info.authors.map((item: any, i: any) => (
              <span className="story-author" key={`${item}${i}`}>
                {/* <span className="role">{item.role}</span> */}
                <span className="author-name">{item.data.info.title}</span>
              </span>
            ))}

            <span className="story-update">
              <DateFormatZh date={story.info.update} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  </>)
}