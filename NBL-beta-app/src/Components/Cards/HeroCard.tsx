

// import Editors from "../../Pages/Editors/Editors";
import "./HeroCard.scss"


export default function HeroCard(props: any) {
  // const story = props.story;
  // console.log(story)

  // 這個函數用於調整豎行排版時候的上下文字間距
  // function wrapCharacters(text: string) {
  //   return text.split('').map((char, index) => (
  //     <span key={index} className="char">
  //       {char}
  //     </span>
  //   ));
  // }
  

  const title = "敦煌：古絲綢之路上的文明瑰寶"
  // console.log(story)
  // const titleDisplay = wrapCharacters(title);

  const brief = "敦煌的地理位置十分獨特，位於河西走廊的盡頭，是古絲綢之路的咽喉要地。自公元前二世紀起，這裡便成為東西方貿易、文化、宗教交流的重要通道。商人、僧侶、使節、冒險家紛至沓來，在這裡交流商品、信仰和技術，形成了一個多元文化的交匯點。"
  // const titleBrief = wrapCharacters(brief);

  const authors = [
    {
      role: "撰文",
      author: {
        info: {
          title: "邵倩文"
        }
      },
    },

    {
      role: "插圖",
      author: {
        info: {
          title: "趙文川"
        }
      },
    }
  ]

  const authorsContainer = (<>
    <div className="authors">
      {authors.map((item: any, i: any) => (
        <span key={`${item}${i}`} className="author-container">
          <span className="author-role">
            {item.role}
          </span>
          <span className="author-name">
            {item.author.info.title}
          </span>
        </span>
      ))}
    </div>
  </>)

  const heroCardInfo = (<>
    <div className="hero-card-info">
        <div className="hero-card-info-container">
          <div className="vc">
            <div className="story-label">
              當前活動
            </div>
            <div className="story-title">
              {title}
            </div>
            <div className="story-brief">
              {brief}
            </div>
            
            {authorsContainer}

          </div>
        </div>
      </div>
  </>)
  
  const heroCardCover = (<>
    <div
        className="hero-card-cover"
        style={{
          backgroundImage: `url(https://cdn.kastatic.org/ka-perseus-images/a44c5ebf55ef91a9c0ed2fe1eccbfc3d2cf43dcc.jpg)`
        }}
      >
        <div className="gradient"></div>
        <div className="border"></div>
      </div>
  </>)

  return (<>
      <a href="" className={`hero-card big ${props.className}`}>
        {heroCardInfo}
        {heroCardCover}
      </a>

      <a href="" className={`hero-card small ${props.className}`}>
        {heroCardInfo}
        {heroCardCover}
      </a>
  </>)
}