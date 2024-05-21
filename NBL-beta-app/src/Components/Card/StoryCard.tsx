import "./StoryCard.scss"

import { Link } from "react-router-dom";


export default function StoryCard(props: any) {
  const linkTo = props.linkTo;
  const cover = props.cover;
  const title = props.title;
  const brief = props.brief;
  const authorAvata = props.authorAvata;
  const authorName = props.authorName;
  const update = props.update;

  return (<>
  
    <Link to={linkTo} className="story-card">
      <div className="story-cover-container">
        <div className="story-cover">
          <img src={cover} alt="" />
        </div>
      </div>
      <div className="story-info-container">
        <div className="story-info">
          <div className="story-title">
            {title}
          </div>
          <div className="story-brief">
            {brief}
          </div>
          <div className="story-author-info-container">
            <div className="story-author-avata">
              <img src={authorAvata} alt="" />
            </div>
            <div className="story-author-caption">
              <div className="story-author-name">
                {authorName}
              </div>
              <span className="story-update">{update}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  
  </>)
}