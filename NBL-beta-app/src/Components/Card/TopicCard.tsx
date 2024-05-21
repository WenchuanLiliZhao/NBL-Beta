import "./TopicCard.scss"

import { Link } from "react-router-dom";


export default function TopicCard(props: any) {
  const linkTo = props.linkTo;
  const cover = props.cover;
  const title = props.title;
  const brief = props.brief;
  const authorAvata = props.authorAvata;
  const authorName = props.authorName;
  const update = props.update;

  return (<>
  
    <Link to={linkTo} className="topic-card">
      <div className="topic-cover-container">
        <div className="topic-cover">
          <img src={cover} alt="" />
        </div>
      </div>
      <div className="topic-info-container">
        <div className="topic-info">
          <div className="topic-title">
            {title}
          </div>
          <div className="topic-brief">
            {brief}
          </div>
          <div className="topic-author-info-container">
            <div className="topic-author-avata">
              <img src={authorAvata} alt="" />
            </div>
            <div className="topic-author-caption">
              <div className="topic-author-name">
                {authorName}
              </div>
              <span className="topic-update">{update}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  
  </>)
}