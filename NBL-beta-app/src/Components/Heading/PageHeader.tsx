import "./PageHeader.scss"

export default function PageHeader(props: any) {

  const title = props.title

  const quote = props.quote

  const quoteFrom = props.quoteFrom

  const align = props.align
  // center, left
  
  return (<>
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
}