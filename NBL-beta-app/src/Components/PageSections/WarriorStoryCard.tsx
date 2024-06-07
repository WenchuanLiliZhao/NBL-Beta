import "./WarriorStoryCard.scss"

export default function WarriorStoryCard(props: any) {
  const story = props.story
  const label = props.label

  return (<>
    <section className="page-section-big-alone">
      <a href={`/${story.info.key}`}>
        <div className="warrior-story-card">

        <div className="cover-container div-bg-img">
          <div className="img" style={{backgroundImage: `url(${story.info.cover})`}}></div>
        </div>

        <div className="story-info-container">
          <div className="story-info">
            {label != null ? (
              <div className="story-label">
                {label}
              </div>
            ) : (<></>)}
            <div className="story-title font-article">
              {story.info.title}
            </div>
            <div className="story-brief">
              {story.info.brief}
            </div>
            <div className="story-authors">
              {story.info.authors.map((item: any, i: any) => (
                <span className="author" key={`${item}${i}`}>
                  <span className="role">
                    {item.role}
                  </span>
                  <span className="name">
                    {item.data.info.title}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      </a>
    </section>
  </>)
}