

import Authors from "../../Pages/Authors/Authors";
import "./HeroCard.scss"


export default function HeroCard(props: any) {
  const isTop = props.isTop


  function wrapCharacters(text: string) {
    return text.split('').map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));
  }
  

  const title = "敦煌：古絲綢之路上的文明瑰寶"
  const titleDisplay = wrapCharacters(title);

  const brief = "敦煌的地理位置十分獨特，位於河西走廊的盡頭，是古絲綢之路的咽喉要地。自公元前二世紀起，這裡便成為東西方貿易、文化、宗教交流的重要通道。商人、僧侶、使節、冒險家紛至沓來，在這裡交流商品、信仰和技術，形成了一個多元文化的交匯點。"
  const titleBrief = wrapCharacters(brief);

  const authors = [
    {
      role: "撰文",
      author: Authors.Author_LuXun,
    },

    {
      role: "插圖",
      author: Authors.Author_Shakespeare,
    }
  ]

  const authorsContainer = (<>
    {authors.map((item: any, i: any) => (
      <div key={`${item}${i}`} className="author-container">
        <span className="author-role">
          撰文
        </span>
        <span className="author-name">
          韶倩文
        </span>
      </div>
    ))}
  </>)
  

  // function wrapCharacters(elementSelector) {
    // const element = document.querySelector(elementSelector);
    // if (element) {
    //     const text = element.textContent;
    //     element.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
    // }
  // }

  const TopEnd = (<>
    <div className="hero-card-top-end">
    </div>
  </>)

  return (<>
    <div className="hero-card">
      
      <div
        className="hero-card-cover"
        style={{
          backgroundImage: `url(https://cdn.kastatic.org/ka-perseus-images/a44c5ebf55ef91a9c0ed2fe1eccbfc3d2cf43dcc.jpg)`
        }}
      ></div>
      
      
      <div className="hero-card-info">
        <div className="hero-card-info-container">
          <div className="vc">
            <div className="story-title">
              {titleDisplay}
            </div>
            <div className="story-brief">
              {titleBrief}
            </div>
            
            {authorsContainer}

          </div>
          
        </div>
      </div>

    </div>
    {/* 这个部分用来 */}
    {isTop == true ? (<>{TopEnd}</>): (<></>)}
  </>)
}