import { Link } from "react-router-dom"
import "./StoryHeadlineCard.scss"

export default function StoryHeadlineCard(props: any) {
  // informations in this components.
  const linkTo = props.linkTo;
  const cover = props.cover;
  const title = props.title;
  const brief = props.brief;
  const authorAvata = props.authorAvata;
  const authorName = props.authorName;
  const update = props.update;

  console.log(`啊，美麗的一天，你看見一篇頭條文章，名字叫《${title}》，由${authorName}撰寫。`)


  return (<>
    <Link to={linkTo} className="story-headline-card">
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