import { Link } from "react-router-dom"
import "./StoryHeadlineCard.scss"

export default function TopicHeadlineCard(props: any) {
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
    <Link to={linkTo} className="topic-headline-card">
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