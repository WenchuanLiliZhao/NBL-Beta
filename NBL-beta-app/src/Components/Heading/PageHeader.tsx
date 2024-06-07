import "./PageHeader.scss"

export default function PageHeader(props: any) {

  const info = props.info

  // uses of variables
  const title = info.title
  const authors = info.authors
  const brief = info.brief
  const quote = info.quote
  const quoteFrom = info.quoteFrom
  const align = props.align // center, left
  const showHeader = props.showHeader

  const element = (<>
    <header className="root-page-header page-section-big" style={props.style}>
      <div className="root-page-header-container">
        <div className={`align ${align}`}>
          <h1 className="root-page-title font-article">
            {title}
          </h1>

          {quote != null ? (<>
            <div className="brief font-article">
              <div className="brief-paragraph">
                「{quote}」
              </div>
              <div className="brief-paragraph">
                ——{quoteFrom}
              </div>
            </div>
          </>) : ""}

          {brief != null ? (<>
            <div className="brief secondary font-article">
              <div className="brief-paragraph">
                {brief}
              </div>
            </div>
          </>) : ""}

          {authors != null ? (<>
            <div className="authors">
              {authors.map((item: any, i: any) => (
                <span className="author" key={`${item}${i}`}>
                  <span className="role">{item.role}</span>
                  <span className="name">{item.author.info.title}</span>
                </span>
              ))}
            </div>
          </>) : ""}
        </div>
      </div>
    </header>
  </>)
  
  return (<>
    {showHeader != false ? element : "" }
  </>)
}