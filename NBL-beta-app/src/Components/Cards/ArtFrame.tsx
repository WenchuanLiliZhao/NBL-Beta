// 注意，這個 component 必須被放置在一個 relative position 的 div 中，而不能單獨作為一個外部元素使用

import "./ArtFrame.scss"

export default function ArtFrame(props: any) {
  const art = props.art

  return (<>
    <a href={`/${art.info.key}`} className="art-frame div-bg-img">
      <div className="img" style={{backgroundImage: `url(${art.info.src})`}}></div>
      <div className="info">
        <div className="info-container">
          <div className="bg"></div>
          <div className="title font-article">
            {art.info.title}
          </div>
          <div className="captions">
            <span className="authors">
              {art.info.authors.map((item: any, i: any) => (
                <span className="author" key={`${item}${i}`}>{item.data.info.title}</span>
              ))}
            </span>
            <span className="era">
              {art.info.era == "不詳" ? "年代不詳" : `，於${art.info.era}`}
            </span>
          </div>
          
        </div>
      </div>
    </a>
  </>)
}