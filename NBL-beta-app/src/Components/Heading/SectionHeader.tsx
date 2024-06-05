
import "./SectionHeader.scss"

export default function SectionHeader(props: any) {
  const title = props.title
  const quote = props.quote
  const quoteFrom = props.quoteFrom

  return (<>
    <div className="section-header">
      <div className="section-title-container">
        <span className="section-title">{title}</span>
      </div>
      <div className="section-quote-container">
        <div></div>
        <div className="section-quote">
          {quote}

          <span className="from">
            出自{quoteFrom}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  </>)
}