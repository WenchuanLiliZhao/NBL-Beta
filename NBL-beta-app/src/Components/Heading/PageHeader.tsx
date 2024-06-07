import "./PageHeader.scss"

export default function PageHeader(props: any) {

  const info = props.info

  // uses of variables
  const title = info.title

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
            <div className="root-page-quote">
              <div className="quote font-article">
                「{quote}」
              </div>
              <div className="quote-from font-article">
                ——{quoteFrom}
              </div>
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