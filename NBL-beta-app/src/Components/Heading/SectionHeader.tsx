
import "./SectionHeader.scss"

export default function SectionHeader(props: any) {
  const label = props.label
  const quote = props.quote
  const quoteFrom = props.quoteFrom

  return (<>
    {label != null ? (<>
      <div className="section-header">
        <div className="section-title-container">
          <span className="section-title">{label}</span>
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
    </>) : ""}
  </>)
}