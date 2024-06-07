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
              <p className="caption brief-paragraph">
                「{quote}」
              </p>
              <p className="caption brief-paragraph">
                ——{quoteFrom}
              </p>
            </div>
          </>) : ""}

          {brief != null ? (<>
            <div className="brief secondary font-article">
              <p className="caption brief-paragraph">
                {brief}
              </p>
            </div>
          </>) : ""}

          {authors != null ? (<>
            <p className="authors caption">
              {authors.map((item: any, i: any) => (
                <span className="author" key={`${item}${i}`}>
                  <span className="role">{item.role}</span>
                  <span className="name">{item.data.info.title}</span>
                </span>
              ))}
            </p>
          </>) : ""}
        </div>
      </div>
    </header>
  </>)
  
  return (<>
    {showHeader != false ? element : "" }
  </>)
}