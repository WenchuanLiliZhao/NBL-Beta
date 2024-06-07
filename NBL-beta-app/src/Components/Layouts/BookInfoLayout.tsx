import "./BookInfoLayout.scss"

import Article from "../Article/Article";

export default function BookInfoLayout(props: any) {

  const info = props.info

  return (<>
    <div className="book-info-layout">
      

      <div className="book-info-layout-container">

        <div className="left">
          <header className="book-info-title">
            
            <h1 className="title">
              {info.title}
            </h1>

            <div className="authors">
              {info.authors.map((item: any, i: any) => (
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
          </header>

          <Article isInner={true} className="text-info" >
            {props.children}
          </Article>
        </div>
        
        <div className="right">
          <img src={info.cover} alt="" />
        </div>

      </div>
    </div>
  </>)
}