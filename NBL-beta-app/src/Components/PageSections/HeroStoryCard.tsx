import "./HeroStoryCard.scss"

export default function HeroStoryCard(props: any) {
  // 變量
  const story = props.story


  // use of variables
  const title = story.info.title;
  const brief = story.info.brief;
  const authors = story.info.authors;
  const link = `/${story.info.key}`;


  const heroCardCover = (<>
    <div className="hero-story-cover-container div-bg-img ani-img-scale">
      <div className="img"
        style={{backgroundImage: `url(https://cdn.kastatic.org/ka-perseus-images/a44c5ebf55ef91a9c0ed2fe1eccbfc3d2cf43dcc.jpg)`}}
      ></div>
    </div>
  </>)

  const heroCardInfo = (<>
    <div className="hero-story-info">
      <div className="hero-story-info-container">
        <div className="story-label">
          當前活動
        </div>
        <div className="story-title font-article">
          {title}
        </div>
        <div className="story-brief">
          {brief}
        </div>
        <div className="story-authors">
          {authors.map((item: any, i: any) => (
            <span key={`${item}${i}`} className="author-container">
              <span className="author-role">
                {item.role}
              </span>
              <span className="author-name">
                {item.data.info.title}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="gradient"></div>
      <div className="border"></div>
    </div>
  </>)

  

  

  return (<>
    <section className={`hero-story-card big page-section-fullwidth-alone ${props.className}`}>
      <a href={link}>
        <div className="hero-story-card-container">
          {heroCardInfo}
          {heroCardCover}
        </div>
      </a>
    </section>

    <section className={`hero-story-card small page-section-fullwidth-alone  ${props.className}`}>
      <a href={link}>
        <div className="hero-story-card-container">
          {heroCardCover}
          {heroCardInfo}
        </div>
      </a>
    </section>
  </>)
}