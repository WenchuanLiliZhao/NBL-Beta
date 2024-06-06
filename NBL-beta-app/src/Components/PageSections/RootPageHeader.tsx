import "./RootPageHeader.scss"

export default function RootPageHeader(props: any) {
  const info = props.info

  return (<>
    <header className="root-page-header page-section-big" style={props.style}>
      <div className="root-page-header-container">
        <h1 className="root-page-title font-article">
          {info.titleOnPage != null ? info.titleOnPage : info.title }
        </h1>

        {info.quote != null ? (<>
          <div className="root-page-quote">
            <div className="quote font-article">
              「{info.quote}」
            </div>
            <div className="quote-from font-article">
              ——{info.quoteFrom}
            </div>
          </div>
        </>) : ""}
      </div>
    </header>
  </>)
}